require("dotenv").config(); // ✅ load .env first

const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/tickets");

const app = express();
app.use(express.json());

const screenRoutes = require("./routes/screens");
app.use("/", screenRoutes);

connectDB(); // ✅ MongoDB connect

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes); // protected by auth middleware

module.exports = app;
