const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// import router
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to db');
  }
);
//middlewares
app.use(express.json());

//router middlewares
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => {
  console.log('server up and running');
});
