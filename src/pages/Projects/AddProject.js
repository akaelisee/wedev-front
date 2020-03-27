import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import FormAddProject from '../../Components/FormAddProject';

export class AddProject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            stateOnglets : 1
        }

    }
    
    setStateOngletsProject = () => {
        this.setState({
            stateOnglets: 1
        })
    }

    setStateOngletsSprints = () => {
        this.setState({
            stateOnglets: 2
        })
    }

    setStateOngletsTask = () => {
        this.setState({
            stateOnglets: 3
        })
    }
    
    render() {
        
        return (
            <>
            <Dashboard />
            <div className="main">
                <div className="main-add">
                    <div className="project-nav">
                        <ul>
                            <a href="#" onClick = {this.setStateOngletsProject} className="link-project"><li>Projet</li></a>
                            <a href="#" onClick = {this.setStateOngletsSprints} className="link-sprints"><li>Sprints</li></a>
                            <a href="#" onClick = {this.setStateOngletsTask} className="link-task"><li>Task</li></a>
                        </ul>
                    </div>
                </div>
                {this.state.stateOnglets === 1 ?
                    <div>
                        <FormAddProject />
                    </div>
                : this.state.stateOnglets === 2 ?
                    <div>
                        two
                    </div>
                :
                    <div>
                        Three
                    </div>
                }
            </div>
            </>
        )
    }
}

export default AddProject
