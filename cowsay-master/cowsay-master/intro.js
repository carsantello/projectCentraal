module.exports = {
    historia: function(nombre, equipo, edad, planeta){
        if(edad <= 18) {
            return `${nombre}  es una persona de ${edad}, que desea ir conseguir entradas para ${equipo} y pero con su edad no podrá ver todo el partido ni tomar una cerveza.`
        }else if(edad >= 18 && edad <= 25){
           return `${nombre} tiene un cupón súper especial para conocer a ${equipo}, y comer unos tacos en la taquería ${planeta}`
        }
        else if (edad >= 25 && edad <= 60 ) {
            return ` ${nombre}, piensa que su equipo ${equipo}, que ha adorado toda su vida, en este año sí van a llegar a la SM y piensa ir a ver el partido en Home`

        } else{
            return ` ${nombre} piensa que es mejor ver el partido de ${equipo} desde su casa a ir al estadio. Pero ${nombre} se pierde los tacos de ${planeta}.`
        }


    }
 }

 