import React , { Component, Fragment } from 'react';
import {Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';

export class Routes extends Component {
    render(){
        return(
            <Fragment>
                <Route exact path = "/" component = { Home } />
            </Fragment>
        )
    }
}


export default withRouter(Routes);