const { Schema, model, Types } = require('mongoose')

const courseSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	stars: {
		type: Number,
		default: 0
	},
	pages: [
		{
			title: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true
			},
			content: String
		}
	],
	owner: {
		type: Types.ObjectId,
		ref: 'User',
		// required: true
	}
})

module.exports = model('Course', courseSchema)