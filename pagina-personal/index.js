const http = require('http');
const fs   = require('fs');

const server = http.createServer(function(request, response) {
//  res.end('okay');
   fs.readFile('src/index.html', 'utf-8', function(err, contenido) {
//     if (err) {
//       throw err
       (err) ? console.log(err) : console.log('todo ok');
       response.end(contenido);
     })

//     (err) ? console.log(err) : console.log('todo ok');
//     res.end(contenido);
//   })
});

//buen practica para que no se quede en escucha la peticion
console.log('Iniciando servidor en el puerto 8000');
console.log('http://localhost:8000');
//aqui se arranca la peticion de escucha:
server.listen(8000);

//
