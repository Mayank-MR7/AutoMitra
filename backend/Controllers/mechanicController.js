const Mechanic = require("../models/Mechanic");

const handleSubmitMechanic = async (req, res) => {
  try {
    const { name, phone, email, city, service, description } = req.body;
    const newMechanic = new Mechanic({
      name,
      phone,
      email,
      city,
      service,
      description,
    });

    await newMechanic.save();
    res.status(201).json({
      success: true,
      message: "Mechanic request submitted successfully",
      data: newMechanic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting mechanic request",
      error: error.message,
    });
  }
};

const handleGetMechanicDetails = async (req, res) => {
  try {
    const mechanics = await Mechanic.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: mechanics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching mechanic requests",
      error: error.message,
    });
  }
};


const handleGetBasicMechanicDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page = 1
    const limit = parseInt(req.query.limit) || 10; // default 10 per page
    const skip = (page - 1) * limit;

    const total = await Mechanic.countDocuments();

    const mechanics = await Mechanic.find({}, 'name phone email city service')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: mechanics,
      total,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching mechanic requests',
      error: error.message,
    });
  }
};


module.exports = { handleSubmitMechanic, handleGetMechanicDetails, handleGetBasicMechanicDetails };
