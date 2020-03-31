import React, { Component } from 'react';
import Dashboard from '../Dashboard'
import {Link} from 'react-router-dom'
import FormAddSprint from '../../Components/FormSprint/FormAddSprint';

export class AddSprints extends Component {
    render() {
        return (
                <>
                <Dashboard />
                <div className="main">
                    <div className="main-add">
                        <div className="project-nav">
                            <ul>
                                <Link to="/projet" className="link-project"><li>Projet</li></Link>
                                <Link to="/sprint"  className="link-sprints"><li>Sprints</li></Link>
                                <Link to="/task"  className="link-task"><li>Tâche</li></Link>
                            </ul>
                        </div>
                    </div>
                
                    <div>
                        <FormAddSprint />
                    </div>
                </div>
                    
            </>
        )
    }
}

export default AddSprints
