const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
//Getting All
router.get('/', async (req, res) => {
	try {
		const movies = await Movie.find();
		res.json(movies);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//getting one

router.get('/:id', getMovie, (req, res) => {
	res.json(res.movie);
});
//creating one

router.post('/', async (req, res) => {
	const movie = new Movie({
		title: req.body.title,
		debut: req.body.debut,
		station: req.body.station,
		image: req.body.image,
	});
	try {
		const newMovie = await movie.save();
		res.status(201).json(newMovie);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//updating one
router.patch('/:id', getMovie, async (req, res) => {
	if (req.body.title != null) {
		res.movie.title = req.body.title;
	}
	if (req.body.debut != null) {
		res.movie.debut = req.body.debut;
	}
	if (req.body.station != null) {
		res.movie.station = req.body.station;
	}
	try {
		const updatedMovie = await res.movie.save();
		res.json(updatedMovie);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//deleting one
router.delete('/:id', getMovie, async (req, res) => {
	try {
		await res.movie.remove();
		res.json({ message: 'Deleted movie' });
	} catch (err) {
		res.status(500).json({ message: error.message });
	}
});

async function getMovie(req, res, next) {
	let movie;
	try {
		movie = await Movie.findById(req.params.id);
		if (movie == null) {
			return res.status(404).json({ message: 'Cannot find movie' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.movie = movie;
	next();
}
module.exports = router;
