const cowsay = require("cowsay");
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
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz, bien happy ";
var edad = Math.floor(Math.random() * 100);
const edad_espectadores = edad;


console.log(intro.historia(nombre, equipo,edad,planeta));
console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
console.log(fin.historia(edad, equipo, emocion));






console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
