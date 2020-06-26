var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.')
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor.')
})

//Emitir información
socket.emit('enviaMensaje', {
    //usuario: 'Ricardo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
})

//Escuchar información
socket.on('enviaMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})