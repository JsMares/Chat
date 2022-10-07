const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require ("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg, nick)  => {
        io.emit('chat message', msg, nick);
    });

    socket.on('user_name', (apo) => {
        io.emit('user_name', apo);
    });
});

server.listen(3000, () => {
    console.log('Servidor funcionando en el puerto *:3000'); 
});