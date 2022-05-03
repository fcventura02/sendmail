require('dotenv').config()
module.exports = {
    host: "smtp.gmail.com",
    port: 465,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
}