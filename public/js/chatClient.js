var socket = io();

$('.name-submit').click(function () {
  var user = $('.name-input').val();
  socket.emit('user',{name:user});
  $('.login').toggle();
  $('.all-chats').removeClass("hidden");
});
