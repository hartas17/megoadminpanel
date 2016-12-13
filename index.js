/*Server side*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sp = require('serialport');
var recieved = 0;
//Ponemos el servidor a escuhar en localhost con el puerto 8080

server.listen(8080, function () {
  console.log('Servidor corriendo en http://localhost:8080');
});

//indicamos la ruta que tendran los ficheros estaticos
app.use(express.static('public'));

/*Configuramos el puerto serial que recibira los datos, estos datos son los que
serviremos a los clientes que se conecten al servidor*/

var port_name = "/dev/ttyUSB0";
var port = new sp(port_name, {
  baudRate : 9600,
  parser: sp.parsers.readline("\n")
});

//Port listeners

port.on('open', function () {
  console.log('Puerto '+port_name+' abierto correctmente');
});

//===

port.on('error', function (err) {
  console.log('Error en puerto: '+port_name+': '+err.message);
  console.log('Verifique que el dispositivo este correctamente conectado');
});

//==


port.on('data', function (data) {

  recieved = data.toString();
  recieved=recieved.replace(/(\r\n|\n|\r)/gm,"");
  
  console.log('Dato leido de '+port_name+' '+recieved);
  //enviamos el dato al broadcast
  io.sockets.emit('recieved', recieved);

});

//==

port.on('disconnect', function (err) {
  console.log('Desconexi[o]n en puerto: '+port_name+': '+err.message);
  console.log('Verifique que el dispositivo este correctamente conectado');
});

//==

port.on('close', function () {
  console.log('Puerto '+port_name+' cerrado correctmente');
});

//==============================================================================
/*Configuracion del websocket para la transmision de datos a los clientes que se
conecten al servidor*/

io.on('connection', function (socket) {
  console.log('Nueva conexion establecida con cliente');
});
