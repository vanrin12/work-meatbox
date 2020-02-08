import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Signin from '../components/Login';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    type: state.accountReducer.type,
    isProcessing: state.accountReducer.isProcessing,
    token: state.accountReducer.token
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      signIn: Creators.signIn
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
