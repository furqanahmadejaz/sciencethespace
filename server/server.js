const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const blogs = require('./routes/blogs')
const users = require('./routes/users')
const userblogs = require('./routes/userblogs')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json())
app.use('/api/blogs', blogs)
app.use('/api/user', users)
app.use('/api', userblogs )


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
      app.listen(process.env.PORT, () => {
        console.log(
          `Connected to database and listening to port ${process.env.PORT}`
        );
      });
    }).catch((error) =>{
      console.log(error)
    })
