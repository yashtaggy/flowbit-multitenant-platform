const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  screenUrl: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Screen", screenSchema);
