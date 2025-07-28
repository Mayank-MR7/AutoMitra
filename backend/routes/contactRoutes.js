const express = require('express');
const router = express.Router();

const contactUsController = require("../Controllers/ContactController");

router.post("/", contactUsController.handleContactSubmit);

router.get("/", contactUsController.handleGetContactDetails);

router.get("/basic", contactUsController.handleGetBasicContactDetails);

module.exports = router;