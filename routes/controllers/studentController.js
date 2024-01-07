//get the express
var express=require('express')
//get the router
var router=express.Router();
var {getStudentService,regStudentService}=require('../services/studentService')

// http://localhost:2020/std/reg-std, post
router.post("/reg-std",function(req,res,next){ //req recieved
    console.log("reg-std controller")
    regStudentService()
    //take the data from the req
    //connect with db
    //performed required operation
    //prepare response
    //send res back to client

    //to send the response to client
    res.send("Hello Nihar")
})

// http://localhost:2020/std/get-std, get
router.get("/get-std",function(req,res,next){ //req recieved
    console.log("get-std Controller")
    getStudentService()
    //take the data from the req
    //connect with db
    //performed required operation
    //prepare response
    //send res back to client
    res.send("Hello Dhoni")
})


//to export the router
module.exports=router;