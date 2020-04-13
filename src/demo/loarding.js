import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// BoxsLoarding  styled-components

const colors1 = ['#63b8ff', '#00bfff', '#009acd', '#1e90ff', '#4876ff'];
const colors2 = ['#FA8072', '#FFA500', '#FF8C00', '#FF6347', '#FF4500'];

const Wrap = styled.div`
  width: 100%;
  background: black;
`;

const Container = styled.div`
  height: 500px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrap = styled.div`
  height: 40px;
  width: 40px;
  margin: 20px;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background: ${props => props.color};
  border-radius: 50%;
`;

const animations = keyframes`
    50%{
        width: 100%;
        height: 100%;
        opacity: 0.7;
    }
    80%{
        opacity: 0.7;
    }
    100%{
        width: 250%;
        height: 250%;
        opacity: 0
    }
`;

const Item = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  background: ${props => props.color};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: ${animations} 2s ease-out infinite;
  animation-delay: ${props => props.i * 0.2 + 's'};
`;

class BoxsLoarding extends Component {
  getBoxs = () => {
    // const colors = colors1;
    const colors = colors2;
    return colors.map((color, i) => {
      return (
        <BoxWrap>
          <Box color={color} i={i} />
          <Item color={color} i={i} />
        </BoxWrap>
      );
    });
  };
  render() {
    const colors = colors1;
    return <Container>{this.getBoxs()}</Container>;
  }
}

// BallLoarding  styled-components

const spin = keyframes`
  to{
    transform: rotate(360deg)
  }
`;
const Ball = styled.div`
  width: 8em;
  height: 8em;
  position: relative;
  background: black;
  border-radius: 50%;
  box-shadow: inset 0.5em -0.5em crimson;
  animation: ${spin} 2s linear infinite;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    filter: blur(5px);
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    filter: blur(10px);
  }
`;

class BallLoarding extends Component {
  render() {
    return (
      <Container>
        <Ball />
      </Container>
    );
  }
}

export default class Loarding extends Component {
  render() {
    return (
      <Wrap>
        <BoxsLoarding />
        <BallLoarding />
      </Wrap>
    );
  }
}
