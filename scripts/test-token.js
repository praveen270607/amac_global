// scripts/test-token.js
const { google } = require('googleapis')

async function run() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN in env')
    process.exit(1)
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret)
  oAuth2Client.setCredentials({ refresh_token: refreshToken })

  try {
    const res = await oAuth2Client.getAccessToken()
    console.log('access token ok — expires_in maybe present')
    console.log(typeof res === 'string' ? res.slice(0,60)+'...' : (res?.token || '').slice(0,60) + '...')
  } catch (err) {
    console.error('failed to get access token:', err.message || err)
    process.exit(2)
  }
}

run()
