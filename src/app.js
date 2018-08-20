import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import { Main } from './features/main';
import { Header } from './features/header';
import './ui/global-styles';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

export const App = () => (
  <Grid>
    <Header />
    <Main />
  </Grid>
);

export const HotApp = hot(module)(App);
