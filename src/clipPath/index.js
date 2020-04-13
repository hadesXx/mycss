import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * clip-path 
 * 层叠样式表
 * 所有的IE都不支持，所以没什么用
 */

const Box = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  display: inline-block;
  background: #ff8c69;
`;

const Box1 = styled(Box)`
  clip-path: circle(50%); // 50%是一个正圆，40%是一个更小的圆
`;

const Box2 = styled(Box)`
  clip-path: ellipse(100px 100px at 10% 30%);
`;

const Box3 = styled(Box)`
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
`;

export default class index extends Component {
  render() {
    return [<Box1></Box1>, <Box2></Box2>, <Box3></Box3>];
  }
}
