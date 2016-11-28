var app = require("./app");
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = 3000 || process.env.PORT;
server.listen(port,function(){
    console.log("server running at "+port);
});

io.on('connection',function (socket) {
    console.log("user connected");
    socket.on('disconnect',function () {
        console.log("disconnected");
    });
});
