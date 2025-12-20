import nodemailer from 'nodemailer'
import 'dotenv/config'

const t = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

t.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.SMTP_USER,
  subject: 'SMTP Test',
  text: 'If you got this, SMTP works.',
})
.then(console.log)
.catch(console.error)
