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
  ];
  
  const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
  ];
  

  function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
  }

  function convertHoursToMinutes(time) {
      const  [hour, minutes ] =  time.split(':') //separa ex. 09:20 em hour = 09 e minutes = 20 
      return Number(hour * 60) + Number(minutes) //
  }
  console.log(convertHoursToMinutes("09:00"))
  module.exports = {
      subjects,
      weekdays,
      getSubject,
      convertHoursToMinutes
  }