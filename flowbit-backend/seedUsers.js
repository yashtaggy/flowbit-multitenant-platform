// seedUsers.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.deleteMany();

  await User.insertMany([
    {
      email: "adminA@logistics.com",
      password: "adminA123",
      customerId: "LogisticsCo",
      role: "Admin",
    },
    {
      email: "adminB@retail.com",
      password: "adminB123",
      customerId: "RetailGmbH",
      role: "Admin",
    },
    {
        email: "adminC@retail.com",
        password: "adminC123",
        customerId: "VetailGmbH",
        role: "Admin",
      },
  ]);

  console.log("✅ Users seeded");
  mongoose.disconnect();
});
