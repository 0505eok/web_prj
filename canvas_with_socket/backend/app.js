const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

app.use(express.static(path.join(__dirname, "../canvas/build")));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../canvas/build/index.html'));
});

let ulist = []; // map 쓰면 삽입, 삭제 좀 더 빠르게 가능

io.on('connection', function(socket){
    socket.on('login', function(data){
        console.log(`${data.name}님이 로그인 하였습니다.`);
        socket.name = data.name;
        socket.id = data.userid;
        socket.broadcast.emit('login', data.name);
        ulist.push({name: socket.name, x:0, y:0});
    });

    socket.on('chat', function(data){
        console.log(`${socket.name}으로 부터 메세지가 전달되었습니다. : ${data.msg}`);
        const msg = {
            from: {
                name: socket.name,
                userid: socket.userid
            },
            msg: data.msg
        };

        socket.broadcast.emit('chat', msg);
    });

    socket.on('forceDisconnect', function() {
        socket.disconnect();
    });

    socket.on('disconnect', function() {
        console.log(`${socket.name}님이 접속을 종료하였습니다.`);
        ulist = ulist.filter((usr) => {
            return (usr.name != socket.name)
        });
        socket.broadcast.emit('discon', ulist, socket.name);
        //socket.disconnect();
    });

    socket.on('move', function(user){
        ulist.forEach((usr) => {
            if(usr.name == user.name){
                //console.log(usr);
                usr.x = user.x;
                usr.y = user.y;
            }
        })
        socket.broadcast.emit('move', ulist);
    })

});

server.listen(3000, function(){
    console.log('Socket IO server listening on port 3000');
});



