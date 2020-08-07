const proffys = [
    { name: "Diego Fernandes", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "11987654332",
      bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões',
      subject: "Química",
      cost: "20,00",
      weekday: [0],
      time_from: [720],
      time_to: [1220]
    },
    { name: "Cleiton Mattos", 
      avatar: "https://avatars0.githubusercontent.com/u/49954230?s=460&u=ad09de46c0689926a1d9aea07b44830218420ad8&v=4",
      whatsapp: "11987654332",
      bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões',
      subject: "Química",
      cost: "20,00",
      weekday: [3],
      time_from: [620],
      time_to: [1530]
    }
]


function pageLanding(req,res) {
    //enviando como resposta o arquivo html 
    return res.render("index.html") 
}

function pageStudy(req,res) {
    return res.render("study.html",{ proffys, title: "HI from Nunjucks" }) 
}

function pageGiveClasses(req,res) {
    return res.render("give-classes.html")
}

const express = require("express")
const server = express()


//configurar o nunjuks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configurar arquivos estaticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

