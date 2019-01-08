const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db');
//var mongodb =require('mongodb')


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(morgan('combined'));
app.get('/',(req , res) => {
    res.render('index');
});

server = app.listen(3000);
console.log(`listening on 3000`);

const io = require(`socket.io`)(server);

io.on('connection', (socket)=> {
    console.log('a user connected');

    socket.on('disconnect', ()=>{
        console.log(`\n${socket.username} disconnected`);
        console.log(`Last 10 Messages:`)
        // db.lastMessage.forEach(element => {
        //     console.log(`${element}`)
        // });
        db.finalMsg();
        
    });

    socket.username = "anonymous";
    socket.on('change_username', (data)=>{
        socket.username = data.username;
    });

    socket.on('new_message',(data)=>{
        io.emit('new_message', {username: socket.username, message: data.message})

        var userData = {
            username: socket.username,
            message: data.message
        }

        db.DbConnection(userData);
    })
})