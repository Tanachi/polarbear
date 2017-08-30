const mongoose = require('mongoose');
const volunteer = mongoose.model(
  "Volunteer",
  {
    volunteerId:{
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    birthDate:{
      type: String,
      required: true
    },
    addressOne:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    electionAvailable: {
      type: String,
      required: true
    },
  }
);

module.exports = volunteer;