require('dotenv').config()
module.exports = {
    host: "smtp.gmail.com",
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
}