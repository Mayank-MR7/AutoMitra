const Contact = require("../models/Contact");

const handleContactSubmit = async (req, res) => {
  try {
    const { name, phone, email, comment } = req.body;
    const newContact = new Contact({ name, phone, email, comment });
    await newContact.save();
    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting contact",
      error: error.message,
    });
  }
};

const handleGetContactDetails = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contact details",
      error: error.message,
    });
  }
};

const handleGetBasicContactDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Contact.countDocuments();

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select("name phone email comment")
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: contacts,
      total,
      page,
      limit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contact details",
      error: error.message,
    });
  }
};

module.exports = {
  handleContactSubmit,
  handleGetContactDetails,
  handleGetBasicContactDetails,
};
