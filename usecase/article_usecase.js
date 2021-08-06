var axios=require("axios");
var dotenv=require("dotenv");
dotenv.config();
module.exports={
    get_articles:async()=>{
      var data=await axios(process.env.ARTICLE_SERVICE+":"+process.env.ARTICLE_SERVICE_PORT+"/article");
      return data.data;
    },
    search_articles:async(keyword)=>{
        var data=await axios(process.env.ARTICLE_SERVICE+":"+process.env.ARTICLE_SERVICE_PORT+"/article/search/"+keyword);
        return data.data;
    }
}