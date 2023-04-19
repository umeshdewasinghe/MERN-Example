const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cores = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;


app.use(cores());
app.use(bodyparser.json());

const URL = process.env.DATABASE;

//database connectoin
mongoose.connect(URL, {
    useCreateIndex :  true,
    useNewUrlParser :  true,
    useUnifiedTopologyL : true,
    useFindAndModify : false
 });

const connection = mongoose.connection;

mongoose.connect(URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

//connecting to the port
app.listen(PORT, () => {
    console.log('server is running ');
});