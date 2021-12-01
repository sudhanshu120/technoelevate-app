const questionsModel = require('../models/questions')


const getAllQuestion = async(req,res)=>{
    try{
        const questionDataList = await questionsModel.find().lean();
        res.json({
            error:false,
            message:"",
            data:questionDataList,
        });
    }catch(err){
        next(err)
    }
};

const getSearchData = async (req,res)=>{
    const {technology,level,fromDate,toDate,search} = req.body
    console.log("search backend=",search);
    try{
        const searchData = await questionsModel.find({ "questions.question" : new RegExp(search,'i')}).lean();
        
        res.json({
            error:false,
            message:"",
            data:searchData,
        });
    }catch(err){
        next(err)
    }
}

module.exports = {
   getSearchData,getAllQuestion
}