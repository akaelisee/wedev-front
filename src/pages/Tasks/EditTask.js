import React, { Component } from 'react'
import Dashboard from '../Dashboard';
import { Link } from 'react-router-dom';
import FormEditTask from '../../Components/FormTask/FormEditTask';
export class EditTask extends Component {
    render() {
        return (
            <>
                <Dashboard/>
                <div className="main">
                <div className="main-add">
                    <div className="project-nav">
                        <ul>
                            <Link to="/projet" className="link-project"><li>Projet</li></Link>
                            <Link to="/sprint" onClick = {this.setStateOngletsSprints} className="link-sprints"><li>Sprints</li></Link>
                            <Link to="/task" onClick = {this.setStateOngletsTask} className="link-task"><li>Tâche</li></Link>
                        </ul>
                    </div>
                </div>
              
                <div>
                    <FormEditTask />
                </div>
            </div>
            </>
        )
    }
}

export default EditTask
