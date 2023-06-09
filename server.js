const express = require('express');
const app=  express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items=[
        {
            title:"D",
            message:"esenvolver aplicações de forma fácil"
        },

        {
            title:"E",
            message:"JS usa javascript para renderizar HTML"
        },

        {
            title:"M",
            message:"uito fácil de usar"
        },

        {
            title:"A",
            message:"bout"
        },

        {
            title:"I",
            message:"nstall ejs"
        },
        {
            title:"S",
            message:"intaxe do ejs"
        },
    ];

    const subtitle="Uma linguagem de modelagem para criação de pagina HTML"
    res.render("pages/index",{
        qualitys: items,
        subtitle:subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");
