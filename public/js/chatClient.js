var socket = io();

$('#login-modal .btn.save').click(function(){
  var newUser = $('input').val();
  console.log(newUser);
  socket.emit('login',{name:newUser});
  $('#login-page').toggle();
  $('#hangout').toggle();
  $('#hangout #head.style-bg h1').html(newUser);
});

socket.on('allOnlineUsers',function (list) {
  delete list[this.id];
  // showAllOnlineUsersInChat
  var $location = $('.list-text > ul');
  $location.empty();
  $.each(list,function(userId,userName){
    $location.append('<li><img src="http://lorempixel.com/100/100/people/1/"><div class="content-container"><span class="name">'+userName +'</span><span class="txt">Online</span></div><span class="time">'+(new Date)+'</span></li>');
  });
});
