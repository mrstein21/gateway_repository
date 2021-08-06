var movieUsecase=require("../usecase/movie_usecase");
module.exports={
    get_top_rated:async(req,res)=>{
      try{   
       var data=await movieUsecase.get_top_rated(req.params.page);
       return res.json(data);
      }catch(err){
        return res.status.json({
          "success":false,
          "message":"terjadi kesalahan pada server",
          "error":err.toString()
        });
      }
    },
    get_popular:async(req,res)=>{
        try{   
            var data=await movieUsecase.get_popular(req.params.page);
            return res.json(data);
           }catch(err){
             return res.status.json({
               "success":false,
               "message":"terjadi kesalahan pada server",
               "error":err.toString()
             });
         }
    }
}