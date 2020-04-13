import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  // background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  & > a {
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    padding: 0 20px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    border: 1px solid orange;
  }
`;

const Botton = styled.div``;

export default class header extends Component {
  render() {
    return (
      <Container>
        <Link to='/loarding'>加载动画</Link>
        <Link to='/snow'>下雪了</Link>
        <Link to='/textanimationone'>文字动画</Link>
        <Link to='/buttons'>按钮</Link>
        <Link to='/3dbutton'>3D按钮</Link>
        <Link to='/3danimation'>3D动画</Link>
      </Container>
    );
  }
}
