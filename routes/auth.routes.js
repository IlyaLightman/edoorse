const { Router } = require('express')
const { validationResult } = require('express-validator')
const { hash, compare } = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { registerValidators, loginValidators } = require('../utils/validators')
const User = require('../models/User')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')

const router = Router()

const transporter = nodemailer.createTransport(sendgrid({
	auth: { api_key: config.get('SENDGRID_API_KEY') }
}))

// /api/auth/register
router.post('/register', registerValidators,
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при регистрации'
				})
			}

			const { email, password, name } = req.body

			const candidate = await User.findOne({ email })
			if (candidate) {
				res.status(400).json({
					message: 'Пользователь с таким Email уже существует'
				})
			}

			const hashPassword = await hash(password, 10)
			const user = new User({ email, password: hashPassword, name })

			await user.save()

			res.status(201).json({
				message: `Пользователь ${name} успешно создан`
			})
		} catch (err) {
			console.log('Register error', err)
		}
	})

router.post('/login', loginValidators,
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при входе в систему'
				})
			}

			const { email, password } = req.body

			const user = await User.findOne({ email })

			if (!user) {
				return res.status(400).json({
					message: 'Пользователя с таким Email не существует'
				})
			}

			const isMatch = await compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({ message: 'Неверный пароль' })
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.get('jwtSecret'),
				{ expiresIn: '1h' }
			)

			res.json({ token, userId: user.id })
		} catch (err) {
			console.log('Login error', err)
		}
	})

module.exports = router