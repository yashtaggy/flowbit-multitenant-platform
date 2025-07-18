const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: "open" },
  customerId: String, // tenant info
});

if (mongoose.models.Ticket) {
    module.exports = mongoose.model("Ticket");
  } else {
    module.exports = mongoose.model("Ticket", TicketSchema);
  }
  

module.exports = mongoose.model("Ticket", TicketSchema);
