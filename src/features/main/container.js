import { connect } from 'react-redux';

import { actions, getCount } from 'Src/ducks/main';
import { Main } from './main';

const { clickBtn } = actions;

const mapStateToProps = state => ({
  count: getCount(state)
});

export const container = connect(
  mapStateToProps,
  { clickBtn }
)(Main);
