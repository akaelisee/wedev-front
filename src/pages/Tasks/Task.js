import React, { Component } from 'react';
import Dashboard from '../Dashboard';
import ImageGrey from '../../assets/img/Capture.PNG'
import {Link} from 'react-router-dom';

export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id : '',
            description : '',
            start_date : '',
            end_date : '',
            label : '', //Label status
            title : '' // title sprint
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <>
            <Dashboard />
            <div className="main">
                <div className="main-add">
                    <div className="project-nav">
                        <ul>
                            <Link to="/projet"  className="link-project"><li>Projet</li></Link>
                            <Link to="/sprint" className="link-sprints"><li>Sprints</li></Link>
                            <Link to="/task"className="link-task"><li>Tâche</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="main-project">
                    <div className="title-btn">
                        <h2> Parcourir les Tâches</h2>
                        <Link to="/task/add"> <i class="fas fa-plus-circle"></i> Créer une Tâche</Link>
                    </div>
                    <div className="search-project">
                        <input type="text" placeholder="Rechercher une tâche" />
                        <a href="#"><i className="fas fa-search"></i></a>
                    </div>
                    <div className="table-project">
                        <table>
                            <tr className="list-project">
                                <th className="table-first"> Titre</th> 
                                <th> Temps de réalisation</th>
                                <th className="span-statut"> Statut</th> 
                                <th> Actions</th> 
                            </tr>
                            <tr>
                                <td className="table-first"> 
                                    <img src={ImageGrey} alt="" /> 
                                    <span className="span-project">Tâche</span> 
                                </td>
                                <td>18/02/2020</td>
                                <td><span className="span-statut">En cours</span></td>
                                <td>
                                    <Link to="/task/list"> <i className="fas fa-eye"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-first"> 
                                    <img src={ImageGrey} alt="" /> 
                                    <span className="span-project">Tâche</span> 
                                </td>
                                <td>18/02/2020</td>
                                <td><span className="span-statut">En cours</span></td>
                                <td>
                                    <Link to="/task/list"> <i className="fas fa-eye"></i></Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Task
