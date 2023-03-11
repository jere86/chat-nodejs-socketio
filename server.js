const io = require('socket.io')(3000, {
    cors: {
        origin: '*',
    }
});

io.on('connection', socket => {
    socket.on('send-chat-message', message => {
        socket.emit('chat-my-message', message);
        socket.broadcast.emit('chat-others-message', message);
    })
});