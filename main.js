const express = require("express");
const app = express();
const path = require("path");
const port = 9999; 

app.use(express.static(__dirname, ""));

app.get("/", async(req, res)=>{
    res.sendFile(path.join(__dirname, "home.html"));
})

app.listen(port, async()=>{
    console.log(`Listening to ${port}`);
})