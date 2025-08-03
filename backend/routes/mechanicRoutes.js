const express = require('express');
const router = express.Router();

const mechanicController = require('../Controllers/mechanicController');

router.post('/', mechanicController.handleSubmitMechanic);

router.get('/', mechanicController.handleGetMechanicDetails);

router.get('/basic', mechanicController.handleGetBasicMechanicDetails);


module.exports = router;