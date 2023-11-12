const conns = require('./db/connecttodb')
const Question = require("./models/questions")
const z = require('zod');
const input = z.object({
  teacherID: z.string()
})
module.exports.hello = async (event) => {
  try {
    conns();
    const data= event.queryStringParameters;
    console.log(event.queryStringParameters)
    const parsed = input.safeParse(data);
    console.log(parsed)
    if(!parsed.success){
      return{
        statusCode: 400,
        body : 'enter valid inputs'
      }
    }
    const MCQnum = Math.floor(Math.random() * 10);
    const descriptivenum= 10-MCQnum;
    const teacherID = data.teacherID
    const mcqs= await Question.find({responsetype:'MCQ',teacherID}).limit(MCQnum)
    const descriptive= await Question.find({responsetype:'descriptive',teacherID}).limit(descriptivenum)
    const questionpaper = mcqs.concat(descriptive);
    return {
      statusCode: 200,
      body: JSON.stringify(
        questionpaper
      ),
    };
    
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        error
      ),
    };
  }

  

}