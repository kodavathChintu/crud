
const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const route=require("./routes/routes")
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/routes",route)
mongoose.connect('mongodb://localhost:27020,localhost:27021,localhost:27022/cbit?replicaSet=m101')
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const PORT = process.env.PORT || 9099;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});