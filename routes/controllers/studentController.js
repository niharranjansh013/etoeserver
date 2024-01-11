//get the express
var express=require('express')
//get the router
var router=express.Router();
var {getStudentService,regStudentService,loginService}=require('../services/studentService')
var validateToken=require('../../common/validateToken')



// http://localhost:2020/std/reg-std, post
router.post("/reg-std",async function(req,res,next){ //req recieved
    try{
    const{data}=req.body
    console.log(data)
    console.log("reg-std controller")
    var result=await regStudentService(data)
    //take the data from the req
    //connect with db
    //performed required operation
    //prepare response
    //send res back to client

    //to send the response to client
    console.log("controller recieve the result from service and give to client as a response")
    res.send(result)
}catch(exception){
    console.error(exception)
    res.send(exception.message)
}

})

router.post("/login",async function(req,res,next){
    const {data}=req.body
    const result=await loginService(data)
    res.send(result)
})



// http://localhost:2020/std/get-std, get
router.get(
    "/get-std",
    validateToken,
    async function(req,res,next){ //req recieved
    console.log("get-std Controller")
    var result=await getStudentService()
    //take the data from the req
    //connect with db
    //performed required operation
    //prepare response
    //send res back to client
    res.send(result)
})


//to export the router
module.exports=router;