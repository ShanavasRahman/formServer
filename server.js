const io = require('socket.io')(3001, {
    cors: {
        origin: 'https://realtimeform.onrender.com',
        methods:['GET','POST']
    }
})

io.on("connection", socket => {
    socket.on("get-document", documentId => {
        const data = "";
        socket.join(documentId);
        socket.emit("load-document", data);
        socket.on("send-changes", delta => {
            socket.broadcast.emit("receive-changes", delta);
        })
    })
})