const movies = require('./movies.JSON');
const Movie = require('../models/Movie');
const mongoose = require('../server');

Movie.remove({})
	.then(() => {
		return Movie.collection.insertMany(movies);
	})
	.then(() => {
		process.exit();
	});
