const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// THIS LINE IS CRITICAL
app.options("*", cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;