import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    teacherID:{
        type: String,
        require: true
    },
    questionID:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    questiontype:{
        type: String,
        enum: ['MCQ','descriptive']
    },
    options:{
        type:[String]
    }

})

export default Question = mongoose.model("question",questionSchema)