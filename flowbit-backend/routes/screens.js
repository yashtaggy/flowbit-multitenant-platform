const express = require("express");
const auth = require("../middleware/auth");
const registry = require("../registry.json");

const router = express.Router();

// GET /me/screens — returns screens for the logged-in user's tenant
router.get("/me/screens", auth, (req, res) => {
  const { customerId } = req.user;
  const screens = registry.filter(r => r.tenant === customerId);
  res.json(screens);
});

module.exports = router;
