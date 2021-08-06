authUseCase=require("../usecase/auth_usecase");

module.exports={
    login:async(req,res)=>{
        try{
            var response=await authUseCase.login(req.body);
            return res.json(response);
        }catch(err){
           return res.status(500).json({
             "success":false,
             "message":"Terjadi kesalahan pada server",
             "error":err.toString()
           });
        }
    },
    register:async(req,res)=>{
        try{
            var response=await authUseCase.register(req.body);
            return res.json(response);
        }catch(err){
           return res.status(500).json({
             "success":false,
             "message":"Terjadi kesalahan pada server"
           });
        }
    }
}