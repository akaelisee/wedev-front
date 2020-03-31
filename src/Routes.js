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
import EditProject from './pages/Projects/EditProject';
import AddSprints from './pages/Sprints/AddSprints';
import Sprint from './pages/Sprints/Sprint';
import Task from './pages/Tasks/Task';
import AddTasks from './pages/Tasks/AddTasks';
import ListProject from './pages/Projects/ListProject';
import ListSprint from './pages/Sprints/ListSprint';
import EditSprint from './pages/Sprints/EditSprint';
import ListTask from './pages/Tasks/ListTask';
import EditTask from './pages/Tasks/EditTask';


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
                <Route exact path = "/projet/list" component = { ListProject } />
                <Route exact path = "/projet/add" component = { AddProject } />
                <Route exact path = "/projet/edit" component = { EditProject } />
                
                <Route exact path = "/sprint" component = { Sprint } />
                <Route exact path = "/sprint/list" component = { ListSprint } />
                <Route exact path = "/sprint/add" component = { AddSprints } />
                <Route exact path = "/sprint/edit" component = { EditSprint } />

                <Route exact path = "/task" component = { Task } />
                <Route exact path = "/task/add" component = { AddTasks } />
                <Route exact path = "/task/list" component = { ListTask } />
                <Route exact path = "/task/edit" component = { EditTask } />

            </Fragment>
        )
    }
}


export default withRouter(Routes);