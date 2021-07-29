import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/auth" component={AuthRouter}  />

                    <Route path="/home" component={HomeRouter}  />

                    <Redirect to="/auth" />




                </Switch>
            </div>
        </Router>
    )
}
