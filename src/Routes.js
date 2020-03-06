import React , { Component, Fragment } from 'react';
import {Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Inscription from './pages/Inscription';


export class Routes extends Component {
    render(){
        return(
            <Fragment>
                <Route exact path = "/" component = { Home } />
                <Route exact path = "/login" component = { Login } />
                <Route exact path = "/inscription" component = { Inscription } />
            </Fragment>
        )
    }
}


export default withRouter(Routes);