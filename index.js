import express from "express";
import axios from "axios";

const port=3000;
const app=express();
app.use(express.static("public"));

const API_URL="https://secrets-api.appbrewery.com/"

app.get("/",async(req,res)=>{
    try{
        const result= await axios.get(API_URL+"random");
        res.render("index.ejs",{secret:result.data.secret,user:result.data.username});

    } catch(error){
        res.status(404).send("404 Not Found");
    }
})

app.listen(port,()=>{
    console.log("Port running on:", port);
})
