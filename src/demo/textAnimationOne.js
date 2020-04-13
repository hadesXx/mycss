import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const text_color = '#708090';
const text_filter_color = '#fff';
const line_background = '#ffffff';
const animation_background = '#48d1cc';
const line_filter_color = '#48d1cc';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  position: absolute;
  height: 180px;
  width: 8px;
  background: ${line_background};
`;

const leftLineHorAnimation = keyframes`
 0%{
    right: 50%;
 }
 70%{
    right: 85%;
 }
 100%{
    right: 80%;
 }
`;

const leftLineVerAnimation = keyframes`
    0%{
        filter: drop-shadow(0 0 0  ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
    }
    25%{
        filter: drop-shadow(-10px 0 20px  ${line_filter_color});
        transform: translateX(-20px) scale(0.9);
        background: ${animation_background};
    }
    50%{
        filter: drop-shadow(0 0 0 ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
       

    }
    75%{
        filter: drop-shadow(-10px 0 20px ${line_filter_color});
        transform: translateX(-20px) scale(0.9);
        background: ${animation_background};
        

    }
    100%{
        filter: drop-shadow(0 0 0 ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
        
    }
`;

const rightLineVerAnimation = keyframes`
    0%{
        filter: drop-shadow(0 0 0 ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
    }
    25%{
        filter: drop-shadow(10px 0 20px ${line_filter_color});
        transform: translateX(20px) scale(0.9);
        background: ${animation_background};
    }
    50%{
        filter: drop-shadow(0 0 0 ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
    }
    75%{
        filter: drop-shadow(10px 0 20px ${line_filter_color});
        transform: translateX(20px) scale(0.9);
        background: ${animation_background};
    }
    100%{
        filter: drop-shadow(0 0 0 ${line_filter_color});
        transform: translateX(0px) scale(1);
        background: ${line_background};
    }
`;

const rightLineHorAnimation = keyframes`
    0%{
        left: 50%;
    }
    70%{
        left: 85%;
    }
    100%{
        left: 80%;
    }
`;

const LeftLine = styled(Line)`
  right: 80%;
  animation-name: ${leftLineHorAnimation}, ${leftLineVerAnimation};
  animation-duration: 1.5s, 5s;
  animation-timing-function: ease-in-out, linear;
  animation-delay: 0s, 1.5s;
  animation-iteration-count: 1, infinite;
`;

const RihgtLine = styled(Line)`
  left: 80%;
  animation-name: ${rightLineHorAnimation}, ${rightLineVerAnimation};
  animation-duration: 1.5s, 5s;
  animation-timing-function: ease-in-out, linear;
  animation-delay: 0s, 1.5s;
  animation-iteration-count: 1, infinite;
`;

const getTextInitAnimation = props => {
  return keyframes`
        0%{
           color: #000;
           font-size: 12px;
        }
        100%{
            color: ${text_color};
            font-size: 50px;
        }
    `;
};

const getTextAnimation = props => {
  return keyframes`
        0%{
            color: ${text_color};
            transform: scale(1);
            filter: drop-shadow(0 0 0 ${text_filter_color});
        }
        25%{
            color: ${text_color};
            transform: scale(0.5);
            filter: drop-shadow(0 0 20px ${text_filter_color});
        }
        50%{
            color: ${text_color};
            transform: scale(1);
            filter: drop-shadow(0 0 0 ${text_filter_color});
        }
        75%{
            color: ${text_color};
            transform: scale(0.5);
            filter: drop-shadow(0 0 20px ${text_filter_color});
        }
        100%{
            color: ${text_color};
            transform: scale(1);
            filter: drop-shadow(0 0 0 ${text_filter_color});
        }
    `;
};

const Text = styled.div`
  color: #000;
  font-size: 50px;
  margin: 0 1%;
  width: 50px;
  text-align: center;
  animation-name: ${getTextInitAnimation}, ${getTextAnimation};
  animation-duration: 1s, 5s;
  animation-timing-function: linear, linear;
  animation-delay: ${props => props.i}s, ${props => props.i + 1}s;
  animation-iteration-count: 1, infinite;
`;

export default class textAnimationOne extends Component {
  getTexts = () => {
    const times = ['A', 'M', 'A', 'Z', 'I', 'N', 'G', 'C', 'S', 'S'];
    return times.map((value, index) => {
      const i = Math.abs(0.9 - index * 0.2);
      return <Text i={i}>{value}</Text>;
    });
  };
  render() {
    return (
      <Container>
        <LeftLine />
        <RihgtLine />
        {this.getTexts()}
      </Container>
    );
  }
}
