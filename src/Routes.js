import React , { Component, Fragment } from 'react';
import {Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Inscription from './pages/Inscription';
import Projets from './pages/Projets';

export class Routes extends Component {
    render(){
        return(
            <Fragment>
                <Route exact path = "/" component = { Home } />
                <Route exact path = "/profil" component ={Profil}/>
                <Route exact path = "/inscription" component={Inscription}/>
                
            </Fragment>
        )
    }
}


export default withRouter(Routes);