//const cowsay = require("cowsay");
const intro = require('./intro');
const nudo1 = require('./nudo1');
const nudo2 = require('./nudo2');
const fin = require('./fin');
const fs = require('fs'); //filesystem

const ciudad = "Toronto";
const nombre = "Git";
const costo = "$5";
const fraceVaquita = "hola";
var visit = "visit";
var local = "local";
const equipo = "Diablos";
const planeta = "Marte";
const hobby = "Codear";
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz, bien happy ";
var edad = Math.floor(Math.random() * 100);
const edad_espectadores = edad;

fs.readFile('personajes.txt', 'utf-8', function(err, contenido){
   if(err) {
     throw err;
   }
   const personajes = contenido.split(',') ;
   const numeroPersonaje = Math.floor(Math.random() * personajes.lenght)
   const personajeRandom = personajes[numeroPersonaje];

   const historiaCompleta = juntarHistoria(personajeRandom);

//   console personajeRandom = personajes[Math.floor(Math.random() *
//   personajes.length);

   console.log(personajes); // estos son como los displays de cobol
   console.log(numeroPersonaje);
   console.log(personajes.length);
   console.log(historiaCompleta);

   fs.writeFile('historia.txt', historiaCompleta, function(err) {
     if (err) {
       throw err;
     }
   });

}); //estamos leyendo el archivo personajes creado en
                              // la misma carpeta
                              // se puede hacer con una funcion anomina, o con
                              //un callback
//partes de historia
function juntarHistoria(personaje){
  const introHistoria = intro.historia (personaje, local);
  const finalHistoria = fin.historia (local, hobby);
  const historiaCompleta = introHistoria + finalHistoria;
  return historiaCompleta;
}
//const introHistoria = intro.historia(personaje, lugar);
//const introHistoria = intro.historia(personaje, lugar);


//Escribir historia
console.log(intro.historia(nombre, equipo,edad,planeta));
console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
console.log(fin.historia(edad, equipo, emocion));

//console.log(cowsay.say({
//  text : fraceVaquita,
//  e : "x-o",
//  T : "v "
//}));
