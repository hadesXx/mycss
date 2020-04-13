import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * transform-style 属性指定嵌套元素是怎样在三维空间中呈现
 * flat 所有元素在2D平面呈现
 */

const items = [
  {
    text: 'Facebook',
    textColor: '#fff',
    defaultBgColors: ['#212121', '#0D0D0D', '#0D0D0D'],
    hoverBgColors: ['#3b5998', '#365492', '#4a69ad']
  },
  {
    text: 'Twitter',
    textColor: '#000',
    defaultBgColors: ['#ffffff', '#b1b1b1', '#b1b1b1'],
    hoverBgColors: ['#00aced', '#097aa5', '#53b9e0']
  },
  {
    text: 'Google',
    textColor: '#fff',
    defaultBgColors: ['#212121', '#0D0D0D', '#0D0D0D'],
    hoverBgColors: ['#dd4b39', '#b33a2b', '#e66a5a']
  },
  {
    text: 'Instagram',
    textColor: '#000',
    defaultBgColors: ['#ffffff', '#b1b1b1', '#b1b1b1'],
    hoverBgColors: ['#e4405f', '#d81c3f', '#e46880']
  }
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #6c7b8b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
`;

const Text = styled.div`
  transition: 0.5s;
  font-size: 30px;
  letter-spacing: 4px;
  font-weight: 900;
  font-family: 'Times New Roman', Times, serif;
  width: 200px;
  height: 80px;
  line-height: 80px;
  background: ${props => props.defaultBgColor};
  padding-left: 20px;
  color: ${props => props.textColor};
  transform: rotate(-30deg) skew(25deg) translate(0, 0);
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &::before {
    content: '';
    transition: 0.5s;
    position: absolute;
    height: 100%;
    width: 20px;
    left: -20px;
    top: 10px;
    background: ${props => props.defaultBeforeBgColor};
    transform: skewY(-45deg);
  }
  &::after {
    content: '';
    transition: 0.5s;
    position: absolute;
    left: -10px;
    bottom: -20px;
    background: ${props => props.defaultAfterBgColor};
    width: 100%;
    height: 20px;
    transform: skewX(-45deg);
  }

  &:hover {
    background: ${props => props.hoverBgColor};
    color: #fff;
    transform: rotate(-30deg) skew(25deg) translate(30px, -15px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
  }

  &:hover::before {
    background: ${props => props.hoverBeforeBgColor};
  }

  &:hover::after {
    background: ${props => props.hoverAfterBgColor};
  }
`;

class Buttons extends Component {
  getItems = () => {
    return items.map((item, index) => {
      const { text, defaultBgColors, hoverBgColors, textColor } = item;

      const defaultBgColor = defaultBgColors[0];
      const defaultBeforeBgColor = defaultBgColors[1];
      const defaultAfterBgColor = defaultBgColors[2];

      const hoverBgColor = hoverBgColors[0];
      const hoverBeforeBgColor = hoverBgColors[1];
      const hoverAfterBgColor = hoverBgColors[2];
      return (
        <Text
          textColor={textColor}
          defaultBgColor={defaultBgColor}
          defaultBeforeBgColor={defaultBeforeBgColor}
          defaultAfterBgColor={defaultAfterBgColor}
          hoverBgColor={hoverBgColor}
          hoverBeforeBgColor={hoverBeforeBgColor}
          hoverAfterBgColor={hoverAfterBgColor}
        >
          {text}
        </Text>
      );
    });
  };
  render() {
    return <Container>{this.getItems()}</Container>;
  }
}

export default class extends Component {
  render() {
    return <Buttons></Buttons>;
  }
}
