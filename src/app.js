import React from 'react';
import { hot } from 'react-hot-loader';

import { Header } from './features/header';
import { Main } from './features/main';
import Grid from './style';

export const App = () => (
  <Grid>
    <Header />
    <Main />
  </Grid>
);

export const HotApp = hot(module)(App);
