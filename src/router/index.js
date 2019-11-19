import React from 'react';

// Components
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import HomepageContainer from 'pages/Home/containers/HomeContainer';

// Constants

const Router = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* Public routers */}
          <Route exact path={ROUTERS.ROOT} component={HomepageContainer} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
