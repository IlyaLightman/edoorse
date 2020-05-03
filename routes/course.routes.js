const { Router } = require('express')
const config = require('config')
const Course = require('../models/Course')

const router = Router()

router.get('/:id', async (req, res) => {
	try {
		const course = Course.findById(req.params.id)
		res.json(course)
	} catch (err) {
		res.status(500).json({ message: 'Не удалось найти заданный курс' })
	}
})

router.post('/create', async (req, res) => {
	try {
		const { title, description, pages } = req.body


	} catch (err) {
		res.status(500).json({ message: 'Что-то пошло не так...' })
	}
})