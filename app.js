const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/dicee.html");
});

let port = process.env.PORT;
if(port==null || port ==""){
    port=3000;
}
app.listen(port,()=>{
    console.log("server is running on "+port);
});
