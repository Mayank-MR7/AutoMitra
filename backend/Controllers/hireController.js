const Hire = require("../models/Hire");

const handleHireSubmit = async (req, res) => {
  try {
    const { name, phone, email, city, experience, description } = req.body;
    const newHire = new Hire({
      name,
      phone,
      email,
      city,
      experience,
      description,
    });
    await newHire.save();
    res.status(201).json({
      success: true,
      message: "Hire application submitted successfully",
      data: newHire,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting hire application",
      error: error.message,
    });
  }
};

const handleGetHireDetails = async (req, res) => {
  try {
    const hires = await Hire.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: hires
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hire applications',
      error: error.message
    });
  }
};


const handleGetBasicHireDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Hire.countDocuments();

    const hires = await Hire.find({}, 'name phone email city experience')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: hires,
      total,
      page,
      limit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hire applications',
      error: error.message
    });
  }
};


module.exports = { handleHireSubmit, handleGetHireDetails, handleGetBasicHireDetails };
