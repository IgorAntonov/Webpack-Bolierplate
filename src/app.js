import React from 'react';
import { hot } from 'react-hot-loader';

import { Main } from 'Src/features/main';
import { Header } from 'Src/features/header';

import Grid from './style';

export const App = () => (
  <Grid>
    <Header />
    <Main />
  </Grid>
);

export const HotApp = hot(module)(App);
