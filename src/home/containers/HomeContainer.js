import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    userList: state.homeReducer.userList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      getUserList: Creators.getUserList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
