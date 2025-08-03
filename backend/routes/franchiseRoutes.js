const express = require('express');
const router = express.Router();

const franchiseController = require('../Controllers/franchiseController');

router.post('/', franchiseController.handleSubmitFranchise);

router.get('/', franchiseController.handleGetFranchiseDetails);

router.get('/basic', franchiseController.handleGetBasicFranchiseDetails);


module.exports = router