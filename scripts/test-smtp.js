// scripts/test-smtp.js
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

async function run() {
  const user = process.env.SMTP_OAUTH_USER
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

  if (!user || !clientId || !clientSecret || !refreshToken) {
    console.error('Set SMTP_OAUTH_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN')
    process.exit(1)
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret)
  oAuth2Client.setCredentials({ refresh_token: refreshToken })
  const { token: accessToken } = await oAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user,
      clientId,
      clientSecret,
      refreshToken,
      accessToken,
    },
  })

  transporter.verify((err, success) => {
    if (err) {
      console.error('transporter.verify error:', err)
      process.exit(2)
    } else {
      console.log('transporter ok — SMTP auth worked')
    }
  })
}

run().catch(e => { console.error(e); process.exit(3) })
