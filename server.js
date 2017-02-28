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
  // console.log(socket.id);
  // console.log("user connected : "+nosUser);
  socket.on('login',function(aNewUser){
    console.log("username : " + aNewUser.name);
    // console.log(this.id);
    users[this.id] = aNewUser.name;
    console.log(users);
  })
  socket.on('disconnect',function () {
    nosUser--;
    console.log("disconnected.user connected :  "+nosUser);
    console.log(this.id);
    delete users[this.id];
  });
});
