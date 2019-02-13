module.exports = {
    historia: function(edad, equipo, emocion){
        if(edad < 10){
            return `¡Siiiii! como tengo ${edad} conseguí los boletos para los ${equipo} GRATIS, y en home, . Estoy súper ${emocion}.`
        }
        else if (edad >= 18 && edad <40){
            return `YEAHHH, podré ver a los ${equipo}, a un precio accesible y estoy verdaderamente ${emocion}`
        }
        else {
            return `Esto de tener ${edad} años tiene sus ventajas, veré a mis ${equipo} y GRATIS!!!`
        }
    }
 }