
var socket = io();
socket.on('connect',() =>{
    console.log("connected");
});
socket.on('disconnect',() =>{
    console.log("Unable to connect");
})
socket.on('newEmail',(data) =>{
    console.log(data);
})
socket.on('newMessage',(data) =>{
    console.log(data);
})
socket.emit('createEmail',{
    to: "abc@c.com",
    message: "Hi Sent this mail"
})
socket.emit('createMessage',{
    to: "Chatter2",
    message: "Hi there"
})

