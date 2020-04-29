const { body } = require('express-validator')

// TODO Full Validation
// Пока это просто заглушка

exports.registerValidators = [
	body('email')
		.isEmail()
]

exports.loginValidators = [
	body('email')
		.isEmail()
]