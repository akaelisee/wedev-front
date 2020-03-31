import React, { Component } from 'react';
import Dashboard from '../Dashboard';
import ImageGrey from '../../assets/img/Capture.PNG'
import {Link} from 'react-router-dom';

export class ListSprint extends Component {
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
                    <div className="main-list-project">
                        <img src={ImageGrey} alt="" />
                        <div className="float-right">
                            <h3> Projet Name / Sprint #140</h3>
                            <h2> Sprint Name</h2>
                            <div className="btn-list">
                                <Link to="/sprint/edit" className="btn-success"><i className="fas fa-pen"></i> Modifier</Link>
                                <Link to="/sprint/delete" className="btn-danger"><i className="fas fa-trash-alt"></i> Supprimer</Link>
                            </div>
                            <div className="contenu-list">
                                <table>
                                    <tr>
                                        <td className="first-td">Titre sprint :</td>
                                        <td>Titre sprint</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Date de début :</td>
                                        <td>12 déc 2018</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Date de fin:</td>
                                        <td>12 déc 2019</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td"> Statut :</td>
                                        <td><span>En cours</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default ListSprint
