var socket = io();

$('.name-submit').click(function () {
  var user = $('.name-input').val();
  socket.emit('user',{name:user});
});
