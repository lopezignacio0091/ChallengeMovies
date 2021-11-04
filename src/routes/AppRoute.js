import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import NoMatchRoute from '../components/pages/NoMatchRoute';
import MovieDetail from '../components/pages/MovieDetailPage';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
        <Switch>
            <PrivateRoute exact={true} path='/' component={MainPage} />
            <PrivateRoute path='/Detail/:id' component={MovieDetail} />
            <Route component={NoMatchRoute} />

            {/* <Route exact path='/register' >
                    <Register />
                </Route> */}
        </Switch>
    );
};

export default AppRoute