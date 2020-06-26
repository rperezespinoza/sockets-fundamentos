const { io } = require('../server');

io.on('connection', (client) => {
    //console.log(client);
    console.log('Usuario conectado.');

    client.emit('enviaMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvienido a estas aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviaMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviaMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIÓ BIEN!!'
            });
        } else {
            callback({
                resp: 'TODO SALIÓ MAL!!'
            });
        }*/
    })
})