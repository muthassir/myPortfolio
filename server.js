const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();
const likeRouter = require('./routes/Like.router.js')
const app = express()

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))

app.use(cors())
app.use(express.json())
app.use("/api/likes", likeRouter )

app.listen(port,()=>{
    console.log(`server listening at port ${port}`);
})



