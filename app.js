require('dotenv').config();
const express = require("express");
const app = express();
var cors = require('cors')
const connectDB = require("./db/connect");


app.use(cors())

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/product");

app.get("/", (req, res) => {
  res.send("Hi , I am Live");
});

// middleware or two set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
