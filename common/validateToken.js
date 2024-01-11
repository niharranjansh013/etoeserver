var jwt=require('jsonwebtoken')
function validateToken(req,res,next){
    // res.send("1st res")
    var token=req.headers.authorization
    if(token){
        jwt.verify(token,"appToken",function(e){ //e,s ->success or failur
            if(e){
                res.send("Invalid Token")
            }else{
                next()
            }
        })
    }else{
        res.send("token missing")
    }
   
}
module.exports=validateToken