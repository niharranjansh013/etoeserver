//get the express
var express=require('express')
//get the router
var router=express.Router();
var {getStdByIdService,getStudentService,regStudentService,loginService,deleteStudentService,updateStudentService}=require('../services/studentService')
var validateToken=require('../../common/validateToken');
const getDBConn = require('../../common/getDBConn');



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
    try{
    const {data}=req.body
    const result=await loginService(data)
    res.send(result)
    }catch(ex){
        console.error("login",ex)
        res.send(ex,message)
    }
})



// http://localhost:2020/std/get-std, get
router.get(
    "/get-std",
    validateToken,
    async function(req,res,next){ //req recieved
        try{
    console.log("get-std Controller")
    var result=await getStudentService()
    //take the data from the req
    //connect with db
    //performed required operation
    //prepare response
    //send res back to client
    res.send(result)
}catch(ex){
    console.error("get-std",ex)
    res.send(ex,message)
}
})

//update
router.put(
"/update-std",
validateToken,
async function(req,res,next){
    try{
    var {id}=req.query;
    var {data}=req.body;
var result=await updateStudentService(id,data)
res.send(result)
}catch(ex){
    console.error("update-std",ex)
    res.send(ex,message)
}
}
)
//delete
router.delete(
    '/delete-std/:id',
    // validateToken,
    async function(req,res,next){
        try{
       var {id}= req.params
      var result= await deleteStudentService(id)
      res.send(result)
    }catch(ex){
        console.error("delete-std",ex)
        res.send(ex,message)
    }
    }
)

router.get("/get-std-by-id", validateToken,async function(req,res,next){
    try{
    const{id}=req.query
    var result=await getStdByIdService(id)
    res.send(result)
}catch(ex){
    console.error("get-std-by-id",ex)
    res.send(ex,message)
}
})

//to export the router
module.exports=router;