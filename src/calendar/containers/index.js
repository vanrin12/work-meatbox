import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    calendars: state.calendarReducer.calendars
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      getCalendarData: Creators.getCalendarData,
      updateData: Creators.updateData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
