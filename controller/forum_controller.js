var forumUseCase=require('../usecase/forum_usecase');
module.exports={
    get_question:async(req,res,next)=>{
      try{
         var question=await forumUseCase.get_question();
         return res.json(question);
      }catch(e){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi kesalahan pada server !",
            "error":e.toString()
        });
      }
    },
    get_answer:async(req,res,next)=>{
        try{
          var forum=await forumUseCase.get_answer(req.params.id);
          return res.json(forum);
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
          }
    }
}