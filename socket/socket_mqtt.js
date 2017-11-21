

module.exports = function (io) {

    io.on('connection', function (socket) {

        console.log("Someone in index socket");

        socket.on('add', function () {
            socket.emit('add');
            console.log('Add server');
        });


        

    });
}