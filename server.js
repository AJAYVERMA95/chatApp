var app = require("./app");
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = 3000 || process.env.PORT;
server.listen(port,function(){
    console.log("server running at "+port);
});
var createUser = function (nickName,userSocket) {
  userSocket.nickName = nickName;
  return userSocket;
}

var nosUser = 0,allUsers={};
io.on('connection',function (socket) {
  nosUser++;
  socket.on('login',function(aNewUser){
    allUsers[aNewUser.nickName] = createUser(aNewUser.nickName,socket);
    io.emit('allOnlineUsers',Object.keys(allUsers));
  });
  socket.on('clientMssgServer',function(data){
    allUsers[data.to].emit('serverMssgClient',data);
  });
  socket.on('disconnect',function () {
    nosUser--;
    delete allUsers[socket.nickName];
    io.emit('allOnlineUsers',Object.keys(allUsers));
  });
});


var getTime = function () {
  var dt = new Date();
  return time = dt.getHours() + ":" + dt.getMinutes();
}

var getUserSocketId = function (usersList,userName) {
  return Object.keys(usersList).filter(function(id){
  return userName == usersList[id];
  })
}
