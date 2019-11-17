import React from 'react';

// Components
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Homepage from 'pages/Home';

// Constants

const Router = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* Public routers */}
          <Route exact path={ROUTERS.ROOT} component={Homepage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
