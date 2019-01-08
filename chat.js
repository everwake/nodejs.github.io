$(function(){

    var socket = io();

    var message = $("#message")
	var username = $("#username")
	var send_message = $("#send_message")
	var send_username = $("#send_username")
	var chatroom = $("#chatroom")
    var feedback = $("#feedback")

    send_message.click(function(){
        socket.emit('new_message', {message: message.val()});
        message.val("");
    })

    socket.on('new_message', (data)=>{
        chatroom.append(chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>"));
    });
    
    send_username.click(function(){
        socket.emit('change_username', {username: username.val()});
        console.log(username.val());
    });

});