var socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'Dawid',
        text: 'Hey, this is me.'
    });
});

socket.on('disconnect', function() {
    console.log('Connection to server lost.');
});

socket.on('newMessage', function(message){
    console.log('newMessage', message);
});