const express = require('express')
const app = express()

// app.use("/hello",(req,res)=>{
//     res.send("Hello Hello Hello")
// })

app.use("/test",(req,res)=>{
    res.send("Hello from server")
})

//for request params

// app.get("/user/:userId",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Saket",lastName:"Karn"})
// })

app.get("/user",(req,res)=>{
    console.log(req.query);
    res.send({firstName:"Saket",lastName:"Karn"})
})

app.post("/user",(req,res)=>{
    //saving data to db
    res.send("Data Saved Successfully to Database")
})

app.patch("/user",(req,res)=>{
    res.send("Data patched into database")
})

app.delete("/user",(req,res)=>{
    res.send("Data Deleted Succcessfully")
})

// app.use("/", (req,res)=>{
//     res.send("Welcome to our main page")
// })


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});