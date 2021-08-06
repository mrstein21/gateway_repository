var axios=require("axios");
var dotenv=require("dotenv");
var jwt=require('jsonwebtoken');
dotenv.config();
module.exports={
    login:async(request)=>{
      var data=await axios.post(process.env.AUTH_SERVICE+"/auth/login",{
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
        var data=await axios.post(process.env.AUTH_SERVICE+"/auth/register",{
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