const express = require("express");
const router = express.Router();

const InsuranceController = require("../Controllers/insuranceController");

router.post("/", InsuranceController.handleInsuranceSubmit);

router.get("/", InsuranceController.handleGetInsuranceDetails);

router.get('/basic', InsuranceController.handleGetBasicInsuranceDetails);

module.exports = router;
