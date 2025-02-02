const express = require('express');
const { getBreeds } = require('../controllers/breedController');

const router = express.Router();

router.get('/breeds', getBreeds);

module.exports = router;
