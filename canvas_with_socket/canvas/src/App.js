import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

const socket = io('localhost:3000');

const StyledCanvas = styled.canvas`
  height: 100vh;
  width: 1000px;
  border: 1px solid red;
`;

const chatContainer = styled.div`
  height: 100vh;
  width: 30vw;
`

const Print = styled.div`
  display: flex;
  flex-direction: row;
`

const Chat = () => {
  const sendMsg = (() => {
    const txt = document.querySelector('input');
    socket.emit('chat', {
      msg: txt.value
    });
    txt.value = "";
  });

  return (
    <chatContainer>
      <div id="chatlog" style={{"height":"90vh", "border":"1px solid black"}}>
      </div>
      <input type="text">
      </input>
      <button onClick={sendMsg}>
        보내기
      </button>
    </chatContainer>
  );
}

const App = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState();
  const [sender, setSender] = useState({
    name: new Date().getSeconds(),
    userid: new Date().getSeconds()
  });

  useEffect(() => {
    const chat = document.getElementById('chatlog');
    socket.emit('login',sender);

    socket.on('login', function(name){
      console.log(`${name}님이 접속하였습니다.`);
      chat.insertAdjacentHTML('beforeend', `<div>${name}님이 접속하였습니다.</div>`);
    });

    socket.on('chat', function(msg){
      let sd = msg.from.name;
      if(sd == sender.name)
        sd = '나';
      console.log(`${sd} : ${msg.msg}`);
      chat.insertAdjacentHTML('beforeend', `<div>${sd} : ${msg.msg}</div>`);
    });

    socket.on('move', function(user){
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.beginPath();
      context.fillStyle = 'blue';
      context.clearRect(0,0, canvas.width, canvas.height);
      user.forEach((usr) => {
        //console.log(usr);
        //context.beginPath();
        context.moveTo(usr.x, usr.y);
        context.arc(usr.x, usr.y, 4, 0, 2*Math.PI);
      });
      context.fill();
    });

    socket.on('discon', function(user, name){
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.beginPath();
      context.fillStyle = 'blue';
      context.clearRect(0,0, canvas.width, canvas.height);
      user.forEach((usr) => {
        //console.log(usr);
        //context.beginPath();
        context.moveTo(usr.x, usr.y);
        context.arc(usr.x, usr.y, 4, 0, 2*Math.PI);
      });
      context.fill();
      console.log(name);
      chat.insertAdjacentHTML('beforeend', `<div>${name}님이 접속을 종료하였습니다.</div>`);
    });
  },[]);
  
  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = 'blue';

    if(!position){
      //context.arc(canvas.width/2, canvas.height/2, 4, 0, 2*Math.PI);
      setPosition([canvas.width/2, canvas.height/2]);
    }
    else{
      //context.clearRect(0,0, canvas.width, canvas.height);
      //context.arc(position[0], position[1], 4, 0, 2*Math.PI);
      socket.emit('move', {
        name: sender.name,
        x: position[0],
        y: position[1]
      });
    }
    //context.fill();
  },[position]);

  const keyDownHandler = (({code}) => {
    const dir = {
      ArrowUp: [0,-1],
      ArrowDown: [0,1],
      ArrowLeft: [-1,0],
      ArrowRight: [1,0]
    }
    const w = position[0] + 5*dir[code][0];
    const h = position[1] + 5*dir[code][1];
    setPosition([w,h]);
  });

  return (
    <Print>
      <Chat/>
      <StyledCanvas 
        ref={canvasRef}
        tabIndex="0" // 키보드 접근 위한 속성
        onKeyDown={keyDownHandler}
      >
      </StyledCanvas>
    </Print>
  );
}

export default App;