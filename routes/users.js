// import
const express = require('express')

// router function
const userRouter = express.Router()

const userController = require('../controllers/users')

// for register
userRouter.post('/register',userController.register)

// for login
userRouter.post('/login',userController.login)


module.exports = userRouter