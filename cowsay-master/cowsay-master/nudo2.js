module.exports = {
    historia: function(edad, equipo, planeta, sospechoso){
//      return `${edad} ${equipo} ${planeta} ${sospechoso}`

      if(edad>=0 && edad<10){
        return `Tienes menos de ${edad}, tu equipo ${equipo} te lleva gratis al planeta ${planeta}, y veremos  ${sospechoso}.`
      }
      if(edad>=10 && edad <50) {
        return `Como tienes entre 10 y 50: ${edad}, tu equipo ${equipo} te lleva cobra 10% para ir al planeta ${planeta}, y visitar  ${sospechoso}.`
      }
      if(edad>=50){
        return `Dado que eres mayor de ${edad} tu equipo ${equipo} necesita tu ayuda en el planeta ${planeta}, te vemos en  ${sospechoso}.`
      }

    }
 }
