const Franchise = require("../models/Franchise");

const handleSubmitFranchise = async (req, res) => {
  try {
    const { name, phone, city, email, description } = req.body;

    const newFranchise = new Franchise({
      name,
      phone,
      city,
      email,
      description,
    });

    await newFranchise.save();
    res.status(201).json({
      success: true,
      message: "Franchise application submitted successfully",
      data: newFranchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting franchise application",
      error: error.message,
    });
  }
};

const handleGetFranchiseDetails = async (req, res) => {
  try {
    const franchise = await Franchise.find().sort({ createdAt: -1 });
    res.status(200).json({  // Fixed from req to res
      success: true,
      data: franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching franchise applications',
      error: error.message
    });
  }
};

const handleGetBasicFranchiseDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Franchise.countDocuments();

    const franchises = await Franchise.find({}, 'name phone email city')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: franchises,
      total,
      page,
      limit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching franchise applications',
      error: error.message
    });
  }
};


module.exports = { handleGetFranchiseDetails, handleSubmitFranchise, handleGetBasicFranchiseDetails };
