const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate"); // adjust path if needed
const Screen = require("../models/Screen"); // adjust path if needed

// GET /me/screens - Get screens for the authenticated user
router.get("/screens", authenticate, async (req, res) => {
  try {
    const screens = await Screen.find({ customerId: req.user.customerId });
    res.json(screens);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/add-screen", authenticate, async (req, res) => {
  const { screenUrl } = req.body;
  try {
    const screen = await Screen.create({
      screenUrl,
      customerId: req.user.customerId,
    });
    res.json({ message: "Screen added", screen });
  } catch (err) {
    res.status(500).json({ error: "Failed to add screen" });
  }
});

module.exports = router;
