const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')


function pageLanding(req,res) {
    //enviando como resposta o arquivo html 
    return res.render("index.html") 
}

async function pageStudy(req, res) {
    const filters = req.query //recebendo o filtro da pagina study

    if (!filters.subject || !filters.weekday || !filters.time){

        return res.render("study.html", { filters, subjects, weekdays }) 
    }

    //converter horas em minutos

    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `

    SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <=${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `  
    //caso haja erro na consulta do banco de dados.
    
    try{
        const db = await Database
        const proffys = await db.all(query)
        return res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch(error){
        console.log(error)
    }
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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}