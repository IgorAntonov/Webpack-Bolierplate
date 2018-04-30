import { connect } from 'react-redux';

import Main from '../components/Main';
import { clickBtn, getCount } from '../reducers/main';

const mapStateToProps = state => ({
  count: getCount(state)
});

export default connect(mapStateToProps, { clickBtn })(Main);
