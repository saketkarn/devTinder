const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello")
})

app.use("/test",(req,res)=>{
    res.send("Hello from server")
})

app.use((req,res)=>{
    res.send("Welcome to our main page")
})

