var axios=require("axios");
var dotenv=require("dotenv");
dotenv.config();
module.exports={
    get_question:async()=>{
       var data=await axios.get(process.env.FORUM_SERVICE+":"+process.env.FORUM_SERVICE_PORT+"/forum/question");
       return data.data;
    },
    get_answer:async(id)=>{
        var data=await axios.get(process.env.FORUM_SERVICE+":"+process.env.FORUM_SERVICE_PORT+"/forum/question/answer/"+id);
        return data.data;
    }
}