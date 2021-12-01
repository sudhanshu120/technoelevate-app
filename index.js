
const express = require('express')
require('dotenv').config();
const cors = require('cors')

const questionsRoutes = require('./routes/questions')
// user routes
const userRoutes = require('./routes/users')
require('./config/db.js')

const app = express()

const PORT = process.env.PORT || 4000

// cors middleware
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/questions',questionsRoutes)



app.use('/users',userRoutes)

app.get('/test',(req,res)=>{
    res.json({'test':'test the rest service'})
})


app.use((err,req,res,next)=>{
    res.status(500).json({
        error:true,
        message:err.message,
        data:null
    })
})


app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);    
})