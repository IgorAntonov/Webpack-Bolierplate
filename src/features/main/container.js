import { connect } from 'react-redux';

import { Main } from './main';
import { actions, getCount } from '../../ducks/main';

const { clickBtn } = actions;

const mapStateToProps = state => ({
  count: getCount(state)
});

export const container = connect(
  mapStateToProps,
  { clickBtn }
)(Main);
