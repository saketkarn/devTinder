const express = require('express')
const app = express()

app.get("/user",(req,res,next)=>{
    // res.send("Hello from response")
    next()
},
(req,res,next)=>{
    // res.send("Hello from response 2")
    next()
},
(req,res,next)=>{
    // res.send("Hello from response 3")
    next()
},
(req,res,next)=>{
    // res.send("Hello from response 4")
    next()
},
(req,res,next)=>{
    res.send("Hello from response 5")
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});