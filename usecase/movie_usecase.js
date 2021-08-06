var axios=require("axios");
var dotenv=require("dotenv");
dotenv.config();
module.exports={
    get_top_rated:async(page)=>{
       var data=await axios.get(process.env.MOVIE_SERVICE+":"+process.env.MOVIE_SERVICE_PORT+"/movie/top_rated/"+page);
       return data.data;
    },
    get_popular:async(page)=>{
        var data=await axios.get(process.env.MOVIE_SERVICE+":"+process.env.MOVIE_SERVICE_PORT+"/movie/popular/"+page);
        return data.data;
    }
}