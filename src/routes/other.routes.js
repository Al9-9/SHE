const express = require('express')
const router = express.Router()


// Controller require
const { other } = require('../controllers/other')


// Ruta 
router.get('/', other)

module.exports = router