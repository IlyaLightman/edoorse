const { Router } = require('express')
const { validationResult } = require('express-validator')
const { hash, compare } = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { registerValidators } = require('../utils/validators')

const router = Router()

// /api/auth/register
router.post('/register', registerValidators, async (req, res) => {
	try {
		const { email, password, name } = req.body

		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			// Ошибка валидации
		}

		// TODO логика регистрации
	} catch (err) {
		console.log(err)
	}
})