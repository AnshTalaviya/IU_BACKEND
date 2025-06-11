// const mongoose = require('mongoose');

// const savedLocationSchema = new mongoose.Schema({
//   name: String,
//   address: String,
// }, { _id: false });

// const userSchema = new mongoose.Schema({
//   fullName: String,
//   email: { type: String, unique: true, required: true },
//   phone: { type: Number, unique: true, required: true },
//   address: String,
//   role: { type: String, enum: ['User', 'Driver'], default: 'User' },
//   vehicleType: String,
//   vehicleNumber: String,
//   licenseNumber: String,
//   otp: String,
//   verified: { type: Boolean, default: false },

//   savedLocations: [savedLocationSchema],
// });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const savedLocationSchema = new mongoose.Schema({
  name: String,
  address: String,
}, { _id: false });

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true, required: true },
  phone: { type: Number, unique: true, required: true },
  address: String,
  role: { type: String, enum: ['User', 'Driver'], default: 'User' },
  vehicleType: String,
  vehicleNumber: String,
  licenseNumber: String,
  otp: String,
  verified: { type: Boolean, default: false },

  // --- DigiLocker specific fields added here ---
  digilockerVerified: { // To track if DigiLocker verification is done for this user
    type: Boolean,
    default: false,
  },
  aadhaarNumber: { // Storing Aadhaar number directly
    type: String,
    unique: true,
    sparse: true, // Allows null values, so it's not required for all users
  },
  drivingLicenseNumber: { // Storing Driving License number directly
    type: String,
    unique: true,
    sparse: true,
  },
  // You might want to store more details if needed, e.g.,
  // digilockerAadhaarData: Object, // Store full parsed Aadhaar data
  // digilockerDrivingLicenseData: Object, // Store full parsed DL data
  // digilockerAccessToken: String, // If you need to re-fetch documents later
  // digilockerRefreshToken: String, // For long-term access without re-auth
  // ---------------------------------------------

  savedLocations: [savedLocationSchema],
});

module.exports = mongoose.model('User', userSchema);