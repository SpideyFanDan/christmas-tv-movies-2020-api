const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	debut: {
		type: String,
		require: true,
	},
	station: {
		type: String,
		require: true,
	},
	image: {
		type: String,
	},
	watched: {
		type: Boolean,
	},
	stars: {
		type: String,
	},
});

module.exports = mongoose.model('Movie', movieSchema);
