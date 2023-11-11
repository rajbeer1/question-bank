import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    teacherID:{
        type: String,
        require: true
    },
    questionID:{
        type: String,
        require: true
    },
    studentID:{
        type: String,
        require: true
    },
    response:{
        type: String,
        enum: ['a', 'b', 'c', 'd'],
    },
    responsetype:{
        type: String,
        enum: ['MCQ','descriptive']
    },
    s3link:{
        type: String
    }
})

export default Response = mongoose.model("response",responseSchema)