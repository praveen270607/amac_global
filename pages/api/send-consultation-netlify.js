import formidable from 'formidable'
import fs from 'fs/promises'
import path from 'path'
import nodemailer from 'nodemailer'

console.log('SMTP_USER:', process.env.SMTP_USER)
console.log('SMTP_PASS length:', process.env.SMTP_PASS?.length)

// Disable Next.js body parsing
export const config = {
  api: { bodyParser: false },
}

// Parse multipart form
function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      keepExtensions: true,
      uploadDir: '/tmp',
      maxFileSize: 10 * 1024 * 1024, // 10 MB
    })

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fields, files } = await parseForm(req)

    // Build email body
    const summary = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')

    // Attachments
    const attachments = []
    for (const key of Object.keys(files || {})) {
      const file = Array.isArray(files[key]) ? files[key][0] : files[key]
      if (!file?.filepath) continue

      const content = await fs.readFile(file.filepath)
      attachments.push({
        filename: file.originalFilename || path.basename(file.filepath),
        content,
      })
    }

    // Create transporter (APP PASSWORD)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const subjectName =
      fields.firstName ||
      fields.fullName ||
      fields.name ||
      'Website Submission'

    // Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Consultation — ${subjectName}`,
      text: summary,
      html: `<pre>${summary}</pre>`,
      attachments,
    })

    // Cleanup temp files
    for (const key of Object.keys(files || {})) {
      const file = Array.isArray(files[key]) ? files[key][0] : files[key]
      if (file?.filepath) {
        await fs.unlink(file.filepath).catch(() => {})
      }
    }

    return res.status(200).json({
      ok: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    })
  } catch (err) {
    console.error('Mail send error:', err)
    return res.status(500).json({
      error: 'Email sending failed',
      details: err.message,
    })
  }
}
