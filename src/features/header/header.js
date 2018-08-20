import React from 'react';
import styled from 'styled-components';

import { Row, H1 } from 'Src/ui';

const GHLink = styled.a.attrs({
  href: 'https://github.com/IgorAntonov/Webpack-Bolierplate',
  children: 'GitHub'
})`
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
  transition: 0.3s all;
  :hover {
    color: palevioletred;
    text-decoration: none;
  }
`;

export const Header = () => (
  <Row
    justify="space-between"
    align="center"
    padding="0 1.1rem 0 1.1rem"
    bgColor="papayawhip"
  >
    <H1 color="palevioletred">
      Webpack Boilerplate
    </H1>
    <GHLink />
  </Row>
);
