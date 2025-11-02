// pages/api/send-consultation-netlify.js
import formidable from 'formidable'
import fs from 'fs/promises'
import path from 'path'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'

// Turn off Next body parsing — we use formidable
export const config = {
  api: {
    bodyParser: false,
  },
}

// small helper to parse the multipart form using formidable
function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      keepExtensions: true,
      uploadDir: '/tmp', // Netlify /tmp is ok for small files
      maxFileSize: 10 * 1024 * 1024, // 10MB per file — adjust if needed (Netlify limit)
    })

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}

async function getAccessToken() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )
  oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  })
  const tokenResponse = await oAuth2Client.getAccessToken()
  // tokenResponse can be a string or an object, handle both:
  const token = tokenResponse && tokenResponse.token ? tokenResponse.token : tokenResponse
  return token
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fields, files } = await parseForm(req)

    // build the plain-text / HTML summary of fields
    const summaryLines = []
    for (const k of Object.keys(fields)) {
      summaryLines.push(`${k}: ${fields[k]}`)
    }
    const summary = summaryLines.join('\n')

    // prepare attachments array for nodemailer
    const attachments = []
    // files is an object where input names map to file objects
    for (const key of Object.keys(files || {})) {
      const file = files[key]
      // formidable sometimes returns array if multiples: true
      const fileObj = Array.isArray(file) ? file[0] : file
      if (!fileObj || !fileObj.filepath) continue

      const content = await fs.readFile(fileObj.filepath)
      attachments.push({
        filename: fileObj.originalFilename || path.basename(fileObj.filepath),
        content,
      })
    }

    // create OAuth2 access token
    const accessToken = await getAccessToken()
    if (!accessToken) {
      console.error('No access token retrieved')
      return res.status(500).json({ error: 'Failed to get access token' })
    }

    // create nodemailer transport using OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.SMTP_OAUTH_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    })

    // envelope and message
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_OAUTH_USER,
      to: process.env.EMAIL_TO || process.env.SMTP_OAUTH_USER,
      subject: `New consultation — ${fields.firstName || fields.FullName || 'Contact form'}`,
      text: summary,
      html: `<pre style="white-space:pre-wrap;">${summary}</pre>`,
      attachments,
    }

    // send mail
    const info = await transporter.sendMail(mailOptions)

    // cleanup temp files (best-effort)
    try {
      for (const key of Object.keys(files || {})) {
        const file = files[key]
        const fileObj = Array.isArray(file) ? file[0] : file
        if (fileObj && fileObj.filepath) {
          await fs.unlink(fileObj.filepath).catch(() => {})
        }
      }
    } catch (e) {
      // ignore cleanup errors
    }

    return res.status(200).json({ ok: true, info })
  } catch (err) {
    console.error('send-consultation-netlify error', err)
    return res.status(500).json({ error: err.message || String(err) })
  }
}
