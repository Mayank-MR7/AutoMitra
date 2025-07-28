const Insurance = require("../models/Insurance");

const handleInsuranceSubmit = async (req, res) => {
  try {
    const newInsurance = new Insurance(req.body);
    await newInsurance.save();

    res.status(201).json({
      success: true,
      message: "Insurance claim submitted successfully",
      data: newInsurance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting insurance claim",
      error: error.message,
    });
  }
};

const handleGetInsuranceDetails = async (req, res) => {
  try {
    const insurances = await Insurance.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: insurances,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching insurance claims",
      error: error.message,
    });
  }
};

const handleGetBasicInsuranceDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Insurance.countDocuments();

    const insurances = await Insurance.find({}, 'insuredName policyNumber contactPersonNumber vehicleNumber accidentDate')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: insurances,
      total,
      page,
      limit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching insurance claims',
      error: error.message
    });
  }
};


module.exports = { handleInsuranceSubmit, handleGetInsuranceDetails, handleGetBasicInsuranceDetails };
