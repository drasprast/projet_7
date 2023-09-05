require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const book = require("./routes/book");
const auth = require("./routes/user");

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(express.json());
app.use("/images", express.static("images"));

mongoose
  .connect(
    "mongodb+srv://drasprast:8scaOED7zQV9kwNu@cluster0.e6sc4d5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

app.use("/api/auth", auth);
app.use("/api/books", book);

module.exports = app;
