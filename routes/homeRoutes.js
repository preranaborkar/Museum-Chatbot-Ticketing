// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


// Home route
router.get('/', homeController.renderHomePage);

module.exports = router;
