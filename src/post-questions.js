const conns = require('./db/connecttodb')
const Question = require('./models/questions')
const {v4} = require ('uuid')
const z = require('zod')


module.exports.hello= async(event)=>{
    try {
        const input = z.object({
            title:z.string(),
            responsetype:z.string()
        })
        conns()
        const data = JSON.parse(event.body);
        
        const teacherID = event.requestContext.authorizer.email;
      
        const parsed = input.safeParse(data);
        
        if(!parsed.success){
          return{
            statusCode: 400,
            body : 'enter valid inputs'
          }
        }
        const questionID =v4();
        const savedqus = new Question({
          teacherID,
          questionID:questionID,
          title: data.title,
          responsetype: data.responsetype,
          options:data.options
  
        })
        
            const save =  await savedqus.save();
            return {
              statusCode: 200,
              body: JSON.stringify(
                save
              ),
            };
                
      } catch (error) {
          console.log(error)
          return{
            statusCode:500,
            body: 'internal server error'
          }
      }
  

}