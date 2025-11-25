// scripts/test-token.js

// 1) Load .env.local explicitly
require('dotenv').config({ path: '.env.local' })

const { google } = require('googleapis')

async function run() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

  // Debug: show whether env values are actually present (without leaking full secrets)
  console.log('GOOGLE_CLIENT_ID present? ', !!clientId)
  console.log('GOOGLE_CLIENT_SECRET present? ', !!clientSecret)
  console.log('GOOGLE_REFRESH_TOKEN present? ', !!refreshToken)

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN in env')
    process.exit(1)
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret)
  oAuth2Client.setCredentials({ refresh_token: refreshToken })

  try {
    const res = await oAuth2Client.getAccessToken()
    const tokenStr =
      typeof res === 'string'
        ? res
        : res?.token || ''

    console.log('access token ok — sample:', tokenStr.slice(0, 60) + '...')
  } catch (err) {
    console.error('failed to get access token:', err.message || err)
    process.exit(2)
  }
}

run()
