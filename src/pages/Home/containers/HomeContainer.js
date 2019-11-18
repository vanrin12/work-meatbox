import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from 'pages/Home/components';

import { Creators } from 'pages/Home/redux';

const mapStateToProps = state => {
  return {
    nameState: state.homeReducer.name
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
