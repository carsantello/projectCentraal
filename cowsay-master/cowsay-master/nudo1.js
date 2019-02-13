module.exports = {
    historia: function(ciudad ,  costo, edad_espectadores,  visit, local,){
//        return `¡LOS EQUIPOS SE PRRPARAN PARA INICIAR LAS HOSTILIDADES!!`

        if (ciudad = "Toronto") {

          if (edad_espectadores > 10) {
              return `El costo de la entrada para los menores de ${edad_espectadores} es de  ${costo}
              en este bello lugar llamado ${ciudad}.`
            } else {
              return `El costo de la entrada para los  mayores de ${edad_espectadores} es de  ${costo}
              en este bello lugar llamado ${ciudad}.`

            }

        }
        else {
        return `Desconocemos ka edad de La poblacion de esta ciudad `
      }
}
}
