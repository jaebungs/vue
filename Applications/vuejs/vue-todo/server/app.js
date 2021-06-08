const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRouter = require('./routers/todoRouters');

require('dotenv').config()
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extend: true }))

// Routers
app.use('/', todoRouter)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() => console.log('Mongodb connected!'))
  .catch(err => console.log('MongoDB connect failed.', err))

app.listen(PORT, () => console.log(`Vue Todo server is ready on ${PORT}`))
