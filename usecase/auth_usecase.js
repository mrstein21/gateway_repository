var axios=require("axios");
var dotenv=require("dotenv");
var jwt=require('jsonwebtoken');
dotenv.config();
module.exports={
    login:async(request)=>{
      var data=await axios.post(process.env.AUTH_SERVICE+":"+process.env.AUTH_SERVICE_PORT+"/auth/login",{
        "email":request.email,
        "password":request.password
      });
      if(data.data.data!=null){
        var token= jwt.sign(data.data.data,'secretkey');
      }
      return {
          "success":true,
          "token":token,
          "data":data.data.data,
      }
    },
    register:async(request)=>{
        var data=await axios.post(process.env.AUTH_SERVICE+":"+process.env.AUTH_SERVICE_PORT+"/auth/register",{
            "email":request.email,
            "name":request.name,
            "password":request.password
        });
        if(data.data.data!=null){
            var token= jwt.sign(data.data.data,'secretkey');
        }
        return {
            "success":true,
            "token":token,
            "data":data.data.data,
        }
    }
}