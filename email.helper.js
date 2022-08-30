var nodemailer = require('nodemailer')
const JSONResponse = require('./json.helper')

class Emailer {
	transporter = nodemailer.createTransport({
		service: 'gmail', //Example
		auth: {
			user: "email",
			pass: "password",
		},
	})

	constructor() {}
	/**
	 * Sends an email to the intended recipient.
	 * @param {*} to - The recipient or recipient array for the email
	 * @param {*} sub - The subject of the email
	 * @param {*} body - The body of the email
	 */
	sendMail(to, sub, body) {
		let mailOptions = {
			to: to,
			from: email,
			subject: sub,
			text: body,
		}
		this.transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.error(error)
			} else {
				console.log('Email sent: ' + info.response)
			}
		})
	}
}

module.exports = new Emailer()