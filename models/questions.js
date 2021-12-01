const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({

    candidateName:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100
    },
    department:{
        type:String,
        required:true,
    },
    clientName:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100
    },
    technology:{
        type:String,
        required:true,
        
    },
    questions:[{
        question:{
            type:String,
            required:true,
            minlength:1,
            maxlength:100
        },
        answer:{
            type:String
        },
        difficultyLevel:{
            type:String,
            required:true
        }
    }],
    date:{
        type:Date,
        default:Date.now()
    }
       
})
questionSchema.index({'question':'text'})
module.exports = mongoose.model('questions',questionSchema)