const mongoose = require('mongoose')

const CandleScheme = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		scent: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		hoursOfBurn: {
			type: Number,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Candle', CandleScheme)
