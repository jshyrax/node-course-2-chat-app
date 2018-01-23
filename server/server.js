const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage("Admin", "Welcome to the chat App!"));
    socket.broadcast.emit('newMessage', generateMessage("Admin", "A new user has joined!"));
    
    socket.on('disconnect', () => {
        console.log('User disconnected!');
    });
   

    socket.on('createMessage', (newMsg, callback) => { 
        console.log('New Message Created: ', newMsg);
        io.emit('newMessage', generateMessage(newMsg.from, newMsg.text));
        callback("have some cheese");
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});