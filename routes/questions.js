const express = require('express')
const routerQuestion = express.Router()
const questionController = require('../controllers/questions')
const searchController = require('../controllers/search')

routerQuestion.post('/add-question',questionController.insertQuestions)
routerQuestion.post('/search',searchController.getSearchData)
routerQuestion.get('/all-question',searchController.getAllQuestion)



module.exports = routerQuestion





















/********************************************* */
// const express = require('express')
// const routerQuestion = express.Router()
// const questionController = require('../controllers/questions')

// routerQuestion.post('/add-question',questionController.insertQuestions)

// module.exports = routerQuestion
