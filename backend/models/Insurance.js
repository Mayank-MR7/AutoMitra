const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({
  insuranceCompany: { type: String, required: true },
  policyNumber: { type: String, required: true },
  insuredName: String,
  insuredEmail: String,

  //vehicleSchema
  vehicleName: String,
  vehicleNumber: String,

  //wrokshopDetails
  area: String,
  city: String,
  state: String,
  pincode: String,

  //AccidentDetails
  accidentDate: String,
  accidentTime: String,
  accidentLocation: String,
  accidentReason: String,
  damagePart: String,

  // Driver Information
  driverName: String,
  driverLicense: String,
  peopleInVehicle: String,

  // Contact Information
  contactPersonName: String,
  contactPersonNumber: String,

  // Legal Information
  legalAction: String,
  legalDetails: String,

  // Injury Information
  personInjured: String,
  injuryDetails: String,

  // Workshop Status
  carInWorkshop: String,
  workshopDetails: String,

  // Bill Information
  estimatePrepared: String,
  billAmount: String,

  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Insurance', insuranceSchema);
