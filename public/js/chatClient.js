var socket = io();

var getAllOnlineUsers = function(){
  socket.on('allOnlineUsers',function (list) {
    console.log(list);
  });
}

$('#login-modal .btn.save').click(function(){
  var newUser = $('input').val();
  console.log(newUser);
  socket.emit('login',{name:newUser});
  $('#login-page').toggle();
  $('#hangout').toggle();
  $('#hangout #head.style-bg h1').html(newUser);
  getAllOnlineUsers();

});
