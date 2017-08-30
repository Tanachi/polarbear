const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost/omnimood';
const connection = mongoose.connect(MONGO_URL);
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
    electionAvailable: {
      type: String,
      required: true
    },
  }
);