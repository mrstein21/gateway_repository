var articleUseCase=require('../usecase/article_usecase');
module.exports={
    get_articles:async(req,res,next)=>{
      try{
         var article=await articleUseCase.get_articles()
         return res.json(article);
      }catch(e){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi kesalahan pada server !",
            "error":e.toString()
        });
      }
    },
    search_articles:async(req,res,next)=>{
        try{
          var article=await articleUseCase.search_articles(req.params.keyword);
          return res.json(article);
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
          }
    }
}