import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import PrivateRoute from 'utils/PrivateRouter';
import HomepageContainer from 'home/containers/HomeContainer';
import ROUTERS from 'constants/routers';
import SigninContainer from 'users/containers/SigninContainer';
import { API } from 'utils/Apis';

type Props = {
  token: string
};
const Router = ({ token }: Props) => {
  const isAuthenticated = token !== '';
  if (token) {
    API.setHeader('Authorization', 'Bearer ' + token);
  }
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SigninContainer} />
          {/* private routers */}
          <PrivateRoute
            exact
            path={ROUTERS.ROOT}
            component={HomepageContainer}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    token: state.accountReducer.token
  };
};

export default connect(
  mapStateToProps,
  null
)(Router);
