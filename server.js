var app = require("./app");
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = 3000 || process.env.PORT;
server.listen(port,function(){
    console.log("server running at "+port);
});
var nosUser = 0,users={};
io.on('connection',function (socket) {
  nosUser++;
  socket.on('login',function(aNewUser){
    users[this.id] = aNewUser.name;
    console.log("new username : " + aNewUser.name);
    io.emit('allOnlineUsers',users);
    console.log(users);
  })
  socket.on('disconnect',function () {
    nosUser--;
    delete users[this.id];
    console.log("disconnected.New ");
    console.log(users);
    io.emit('allOnlineUsers',users);
  });
});
