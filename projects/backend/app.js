const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));


app.listen(3002,()=> console.log("server running..."));

app.get("/",async(req,res)=>{
    res.json("merhaba !");
})