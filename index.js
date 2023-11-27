const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

})
app.use(express.urlencoded({extended:true}))
app.post("/submit",(req,res)=>{
      console.log(req.body);
      res.json({message:"data added succesful",
      data:req.body
    })
})

app.listen(3000,()=>{
    console.log("app is running on 3000");
})