import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import { Main } from 'Src/features/main';
import { Header } from 'Src/features/header';

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
