const express = require('express')

const app = express()

app.set("view engine", "ejs")


app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "Desenvolvimento de aplicações/serviços de forma ágil"
        },
        {
            title: "E",
            message: "EJS usa Javascript para renderizar o HTML"
        },
        {
            title: "M",
            message: "Muito mais fácil de utilizar"
        },
        {
            title: "A",
            message: "Arroba: itallodev"
        }
    ];


    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})


app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080)

console.log("Servidor Online!")