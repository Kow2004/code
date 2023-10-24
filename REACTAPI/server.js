const express =require('express');
const app =express();
const port = 5050;
const studentroutes=require("./src/router");
var bodyParser=require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1/route",studentroutes);
app.get("/",(req,res)=>{
    res.send(`Hello world`);
});





app.listen(port,()=>console.log(`app listening on port ${port}`));