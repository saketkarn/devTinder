const {adminAuth, userAuth}=require('./middlewares/auth')

const express = require('express')
const app = express()

app.use("/admin",adminAuth)

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data received")
})

app.get("/admin/deleteAllData",(req,res)=>{
    res.send("All data deleted")
})

app.use("/user",userAuth,(req,res)=>{
    res.send("User Data Sent")
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});