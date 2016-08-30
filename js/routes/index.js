import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {RootApp, ListApp,HighApp} from 'js/containers';



const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={RootApp}>

            <Route component={HighApp}>
                <IndexRoute component={ListApp} />
            </Route>
        </Route>

    </Router>
);

export default routes;