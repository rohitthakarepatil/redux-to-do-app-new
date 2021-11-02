import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoutes from '../auth/ProtectedRoutes';

import Header from './Header';

import Login from '../auth/Login';




function Navbar() {

    return (

        <>

            <Router>

                <Switch>

                    <ProtectedRoutes path="/header" component={() => <Header />} />

                    <Route path="/">

                        <Login />

                    </Route>

                </Switch>

            </Router>

        </>

    )

}



export default Navbar