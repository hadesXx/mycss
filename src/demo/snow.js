import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * 样式注解
 *
 * radial-gradient 径向渐变
 * linear-gradient 水平渐变
 * ellipse 椭圆
 * ellipse at bottom 在底部中间开始渐变
 * ellipse at 10% 50% 以左上角为起点，距离10% 50%位置开始渐变
 *
 * filter 滤镜 IE不支持
 * drop-shadow()给图像设置阴影效果，阴影合成在图像下面，可以有模糊度
 * 函数接受css属性box-shadow的值，除了 inset 关键字不支持
 * 和box-shadow很相似，不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速
 *
 * animation-delay 可以是负数，意思是加快几秒开始
 *
 * 难点：
 * 1、雪花的颜色是不一样的，有透明效果，每一个都有一个光晕，使用filter的drop-shadow属性
 * 2、背景色有一个过渡效果，利用radial-gradient径向渐变来有一个颜色过渡的效果
 * 3、每一个雪花的开始位置都不一样，利用绝对定位随机的方式来做定位，但是高度动画是从最顶部到最底部的
 *    利用了animation-delay设置一个随机的负数，来提前触发每一片雪花的开始执行时间
 * 4、雪花有两段动画：一个是自上而下，这个动画的时间是固定的，但是还有一个左右动画，在自上而下这个动画
 *    执行阶段，左右动画可能会执行很多次。最开始 上下、左右 动画都是transform中的translateX和translateY
 *    但是动画只能识别到一个 transform,第二个势必会失效。所以 上下动画 使用绝对定位 top属性，左右动画 使用
 *    translateX 属性。
 * 5、左右动画是来回飘动的，所以在动画中要加入 反向连续执行
 * 6、每个雪花大小不一样，用width、height随机的话，会有一个问题，有的因为渲染问题，会出现一半是圆一般是方
 *    如果用scale，会出现某一个元素有一半边框的bug
 */

const snow_count = 120;
const ab_x_min = 0;
const ab_x_max = 100;

const ab_y_min = -50;
const ab_y_max = 150;

const scale_min = 0;
const scale_max = 1;

const opacity_min = 0.1;
const opacity_max = 1;

const delay_min = -25;
const delay_max = 0;

const translate_x_min = 10;
const translate_x_max = 200;

const animation_x_time_min = 5;
const animation_x_time_max = 10;

const animation_y_time_min = 8;
const animation_y_time_max = 25;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* filter: drop-shadow(0 0 10px #fff); */
  background: radial-gradient(ellipse at bottom, #000010 0%, #000 100%);
`;

const animation_x = props => {
  const { scale, detranslate_x } = props;
  return keyframes`
    0%{
        transform: translateX(0) scale(${scale})
    }
    100%{
        transform: translateX(${detranslate_x}px) scale(${scale})
    }
`;
};

const animation_y = keyframes`
      0%{
          top: -10%
      }
      100%{
          top: 110%
      }
  `;

const Snow = styled.div`
  position: absolute;
  border-radius: 50%;
  left: ${props => props.left + '%'};
  opacity: ${props => props.opacity};
  animation: ${animation_x} ${props => props.timeX}s linear alternate infinite,
    ${animation_y} ${props => props.timeY}s linear infinite;
  animation-delay: ${props => props.delay}s;
  width: 10px;
  height: 10px;
  background: #fff;
  filter: drop-shadow(0 0 10px white);
`;

export default class snow extends Component {
  random = (max, min) => {
    return min + Math.random().toFixed(1) * (max - min);
  };

  getSnow = () => {
    const snow = [];
    for (let i = 0; i < snow_count; i++) {
      const scale = this.random(scale_max, scale_min);
      const opacity = this.random(opacity_max, opacity_min);
      const left = this.random(ab_x_max, ab_x_min);
      const top = this.random(ab_y_max, ab_y_min);
      const delay = this.random(delay_max, delay_min);
      const detranslate_x = this.random(translate_x_max, translate_x_min);

      const timeX = this.random(animation_x_time_max, animation_x_time_min);

      const timeY = this.random(animation_y_time_max, animation_y_time_min);
      snow.push(
        <Snow
          scale={scale}
          opacity={opacity}
          left={left}
          top={top}
          delay={delay}
          timeX={timeX}
          timeY={timeY}
          detranslate_x={detranslate_x}
        />
      );
    }
    return snow;
  };
  render() {
    return <Container>{this.getSnow()}</Container>;
  }
}
