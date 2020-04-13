import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './demo';

import styled from 'styled-components';

const Wrap = styled.div`
  background: black;
  height: 100vh;
`;

function App() {
  return (
    <Wrap>
      <Demo />
    </Wrap>
  );
}

export default App;
