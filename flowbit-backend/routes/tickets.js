const express = require("express");
const Ticket = require("../models/Ticket");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const tickets = await Ticket.find({ customerId: req.user.customerId });
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router; // ✅ Don't forget this line!
