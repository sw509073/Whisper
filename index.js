// HINTS:
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(API_URL+"/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username,
          });
    }
    catch (error) {
        res.render("index.ejs",{error:error.message});
      }
});

app.get("/click",async (req,res)=>{
    try{
        const result = await axios.get(API_URL+"/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username,
          });
    }
    catch(error){
        
    }
});



app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
});

