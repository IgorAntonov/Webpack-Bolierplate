import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'Src/ui';

import {
  MainWrapper,
  ClickerHeader,
  ClickBtn
} from './style';

export const Main = ({ count, clickBtn }) => (
  <MainWrapper>
    <Col align="center">
      <ClickerHeader>
        {count === 0
          ? 'Looks like you\'re ready! Happy coding!'
          : 'Are you ready to work hard?'}
      </ClickerHeader>
      {count !== 0 && (
        <ClickBtn onClick={clickBtn}>
          {`${count} clicks`}
        </ClickBtn>)}
    </Col>
  </MainWrapper>
);

Main.propTypes = {
  count: PropTypes.number.isRequired,
  clickBtn: PropTypes.func.isRequired
};
