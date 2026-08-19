const express = require("express");

const app = new express();

app.get("/", (request, response)=>{
    response.send("<h2>BOA NOITE CABILUDO!!</h2>")
});

app.listen(8080, ()=>{
    console.log("O servidor está rodando na porta 8080!")
});