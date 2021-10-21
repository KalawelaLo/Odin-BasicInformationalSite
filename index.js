const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about.html", (req,res)=>{
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact_me.html", (req,res)=>{
    res.sendFile(path.join(__dirname, "contact_me.html"));
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "error404.html"));
});

app.listen(PORT, () => {
    console.log("App running");
});