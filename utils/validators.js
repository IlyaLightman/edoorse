const { body } = require('express-validator')

exports.registerValidators = [
	body('email')
		.isEmail()
]