const express = require('express');
const { getPets, addPet } = require('../controllers/petController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getPets);
router.post('/', authMiddleware, addPet);

module.exports = router;
