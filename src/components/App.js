import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

const Stl = styled.div`
  color: blue
`;

const App = () => (
  <div>
    <Stl>
      Hello!
    </Stl>
  </div>
);


export default hot(module)(App);

