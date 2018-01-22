var socket = io();
            
socket.on('connect', function() {
    console.log('Connected to server');    
    socket.emit('createMessage', {from: 'client', text:`${socket.id} >> I'm alive!!`});
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
    console.log('New Message ', msg);
});