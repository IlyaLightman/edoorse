const { body } = require('express-validator')
const User = require('../models/User')

exports.registerValidators = [
	body('email')
		.isEmail()
		.withMessage('Введите корректный Email')
		.custom(async (value, { req }) => {
			try {
				const user = await User.findOne({ email: value })
				if (user) {
					return Promise.reject('Пользователь с таким Email уже существует')
				}
			} catch (err) {
				console.log(err)
			}
		})
		.normalizeEmail(),
	body('password')
		.isLength({ min: 5, max: 16 })
		.withMessage('Введите корректный пароль')
		.isAlphanumeric(),
	body('confirm')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Пароли не совпадают')
			}
			return true
		}),
	body('name')
		.isLength({ min: 2, max: 16 })
		.withMessage('Имя должно содержать от 2 до 16 символов')
]

exports.loginValidators = [
	body('email')
		.isEmail()
		.withMessage('Введите корректный Email')
		.custom(async (value, { req }) => {
			try {
				const user = await User.findOne({ email: value })
				if (!user) {
					return Promise.reject('Пользователя с такой почтой не существует')
				}
			} catch (err) {
				console.log(err)
			}
		})
		.normalizeEmail(),
	body('password')
		.isLength({ min: 5, max: 16 })
		.withMessage('Введите корректный пароль')
		.isAlphanumeric
]