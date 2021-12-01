const questionsModel = require('../models/questions')

const insertQuestions = async(req,res,next)=>{
    const {candidateName,department,clientName,technology,questions} = req.body
    console.log(candidateName);

    try{
        await questionsModel.insertMany([{
            candidateName,department,clientName,technology,questions
        }])
        res.json({
            error:false,
            message:'question added successfully',
            data:null
        })
    }catch(err){
        next(err)
    }
}
module.exports = {
    insertQuestions
}