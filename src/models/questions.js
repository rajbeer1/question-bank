import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    teacherID:{
        type: String,
        required: true
    },
    questionID:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
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