const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

// ⬇️ Auth routes prefixed with /auth
app.use('/auth', require('./routes/auth'));
app.use('/me', require('./routes/me'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
}).catch((err) => {
  console.error(err);
});
