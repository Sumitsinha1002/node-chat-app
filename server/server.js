var express = require('express');
const http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket) =>{
    console.log('COnnected');
    socket.emit('newEmail', {
        from: 'sumitaec108@gmail.com',
        message: 'Hi New mail'
    });
    socket.emit('newMessage', {
        from: 'Chatter1',
        message: 'Hi'
    });
    socket.on('disconnect', () =>{
        console.log("disconnected");
    })
    socket.on('createEmail', (data) =>{
        console.log(data);
    })
    socket.on('createMessage', (data) =>{
        console.log(data);
        io.emit('newMessage', {
           from: data.from,
           message: data.message,
           sentOn: new Date().getTime() 
        })
    })
})
app.use(express.static(path.join(__dirname , '../public')));

server.listen(port);