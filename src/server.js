//Servidor
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')


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

