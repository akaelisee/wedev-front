import React , { Component, Fragment } from 'react';
import {Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Inscription from './pages/Inscription';
import Myprofil from './pages/Myprofil';
import Customer from './pages/Customer/Customer';
import Project from './pages/Projects/Project';
import AddCustomer from './pages/Customer/AddCustomer'
import EditCustomer from './pages/Customer/EditCustomer';
import AddProject from './pages/Projects/AddProject';


export class Routes extends Component {
    render(){
        return(
            <Fragment>
                <Route exact path = "/" component = { Home } />
                <Route exact path = "/login" component = { Login } />
                <Route exact path = "/inscription" component = { Inscription } />
                <Route exact path = "/dashboard" component = { Dashboard } />
                <Route exact path = "/profil" component = { Myprofil } />
                <Route exact path = "/client" component = { Customer } /> 
                <Route exact path = "/client/Add" component = { AddCustomer } />
                <Route exact path = "/client/edit" component = { EditCustomer } />
                <Route exact path = "/projet" component = { Project } />
                <Route exact path = "/projet/add" component = { AddProject } />
            </Fragment>
        )
    }
}


export default withRouter(Routes);