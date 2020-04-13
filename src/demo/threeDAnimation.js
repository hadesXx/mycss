import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * 首先 父容器要定义 perspective 纵深3D舞台，才能实现3D的转换效果
 * 其次，要旋转的div，要定义要想实现 translate3D的效果，要有transform-style: preserve-3d的属性才行
 * 要旋转的盒子，只要不定义 transform-style: preserve-3d ，只要transform，就只展示平面效果
 * 所以所有的transform盒子，都要定义transform-style: preserve-3d，或他们的父容器transform-style: preserve-3d
 */

const colors = [];

const borderColors = [];

function addColor() {
  for (let i = 0; i < 20; i++) {
    colors.push(`hsla(${(300 / 20) * i}, 100%, 50%, .3)`);
    borderColors.push(`hsla(${(300 / 20) * i}, 100%, 50%)`);
  }
}
addColor();

const Container = styled.div`
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: #fff;
  transform-style: preserve-3d;
  perspective: 400px;
`;

const boxAnimation = keyframes`
  0% {
    transform: translateZ(0px) rotateX(0deg) translateY(0px);
  }

  40% {
    transform: translateZ(0px) rotateX(0deg) translateY(0px);
  }

  60% {
    transform: translateZ(-500px) rotateX(180deg) translateY(-200px);
  }

  100%{
    transform: translateZ(-500px) rotateX(180deg) translateY(-200px);    
  }
`;

const Box = styled.div`
  width: 60px;
  position: relative;
  margin-top: -120px;
  transform-style: preserve-3d;
  animation: ${boxAnimation} 4s linear infinite alternate;
  animation-delay: ${props => props.delay}s;
`;

const Face = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  background: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  transform-style: preserve-3d;
`;

const Top = styled(Face)`
  width: 60px;
  height: 60px;
  transform: rotateX(90deg) translateZ(30px);
`;

const Bottom = styled(Face)`
  width: 60px;
  height: 60px;
  transform: rotateX(90deg) translateY(0px) translateZ(-210px);
`;

const Front = styled(Face)`
  width: 60px;
  height: 240px;
  transform: translateZ(30px);
`;

const Behind = styled(Face)`
  width: 60px;
  height: 240px;
  transform: translateZ(-30px);
`;

const LeftSide = styled(Face)`
  width: 60px;
  height: 240px;
  transform: rotateY(90deg) translateZ(-30px);
`;

const RightSide = styled(Face)`
  width: 60px;
  height: 240px;
  transform: rotateY(90deg) translateZ(30px);
`;

class AnimationOne extends Component {
  getBoxs = () => {
    const boxs = [];
    colors.forEach((color, index) => {
      const borderColor = borderColors[index];
      const delay = index * 0.1;
      boxs.push(
        <Box delay={delay}>
          <Top color={color} borderColor={borderColor}></Top>
          <Bottom color={color} borderColor={borderColor}></Bottom>
          <Front color={color} borderColor={borderColor}></Front>
          <Behind color={color} borderColor={borderColor}></Behind>
          <LeftSide color={color} borderColor={borderColor}></LeftSide>
          <RightSide color={color} borderColor={borderColor}></RightSide>
        </Box>
      );
    });
    return boxs;
  };
  render() {
    return <Container>{this.getBoxs()}</Container>;
  }
}

export default class extends Component {
  render() {
    return <AnimationOne />;
  }
}
