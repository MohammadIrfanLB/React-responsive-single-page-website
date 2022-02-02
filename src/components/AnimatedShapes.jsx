import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff0000;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 70vh);
    }
  }
`;

const Triangle = styled.div`
  width: 100px;
  height: 50px;
  background-color: #006fc4;
  opacity: 0.9;
  position: absolute;
  top: 200px;
  left: -50px;
  z-index: -1;
  animation: triangle 25s linear alternate infinite;

  @keyframes triangle {
    to {
      transform: translate(100vw, -60vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #26ce22;
  opacity: 0.6;
  position: absolute;
  top: 300px;
  left: -50px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -10vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Triangle />
      <Circle />
    </>
  );
};

export default AnimatedShapes;
