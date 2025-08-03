const express = require("express");
const router = express.Router();

const hireMechaicController = require("../Controllers/hireController");

router.post("/", hireMechaicController.handleHireSubmit);

router.get('/', hireMechaicController.handleGetHireDetails);

router.get('/basic', hireMechaicController.handleGetBasicHireDetails);


module.exports = router;
