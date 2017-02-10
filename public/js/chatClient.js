var socket = io();

$('#login-modal .btn.save').click(function(){
  var newUser = $('input').val();
  console.log(newUser);
  socket.emit('login',{name:newUser});
  $('#hangout[style*="display"]').toggle();
  $('#hangout').toggle();
});
