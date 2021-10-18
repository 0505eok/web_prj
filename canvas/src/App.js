import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState();

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = 'blue';
    if(!position){
      context.arc(canvas.width/2, canvas.height/2, 4, 0, 2*Math.PI);
      setPosition([canvas.width/2, canvas.height/2]);
    }
    else{
      context.clearRect(0,0, canvas.width, canvas.height);
      context.arc(position[0], position[1], 4, 0, 2*Math.PI);
    }
    context.fill();
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
    <StyledCanvas 
      ref={canvasRef}
      tabIndex="0" // 키보드 접근 위한 속성
      onKeyDown={keyDownHandler}
    >
    </StyledCanvas>
  );
}

export default App;