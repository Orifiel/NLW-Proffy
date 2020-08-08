//Dados
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
    },
    { name: "Mariana Mello", 
      avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t31.0-8/20819230_1630919093646697_3507680549877839681_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=f9bkYckLBB8AX_-luHV&_nc_ht=scontent-gru2-2.xx&oh=a57b2d47f187bb265e5f193e6dab67e0&oe=5F542B4C",
      whatsapp: "11987654332",
      bio: 'Apaixonada por Markerting Digital e inspirada em agregar valor com as redes sociais',
      subject: "Artes",
      cost: "30,00",
      weekday: [2],
      time_from: [620],
      time_to: [1530]
    }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Ed. Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
]

//Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req,res) {
    //enviando como resposta o arquivo html 
    return res.render("index.html") 
}

function pageStudy(req,res) {
    const filters = req.query //recebendo o filtro da pagina study
    return res.render("study.html",{ proffys, filters, subjects, weekdays }) 
}

function pageGiveClasses(req,res) {
    const data = req.query

    //add data ao array de proffys
    //se tiver data 
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

      data.subject = getSubject(data.subject)

      proffys.push(data)
      return res.redirect("/study")
    }
    //senão tiver dados, mostrar a pagina
    return res.render("give-classes.html",{ subjects, weekdays })
}

//Servidor
const express = require("express")
const server = express()


//configurar o nunjuks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e config do servidor
server
//configurar arquivos estaticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)

