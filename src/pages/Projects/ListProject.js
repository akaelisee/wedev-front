import React, { Component } from 'react';
import Dashboard from '../Dashboard';
import ImageGrey from '../../assets/img/Capture.PNG'
import {Link} from 'react-router-dom';

export class ListProject extends Component {
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
                            <h3> Projet Name / #140</h3>
                            <h2> Client  :  Aka Jean elisee</h2>
                            <div className="btn-list">
                                <Link to="/projet/edit" className="btn-success"><i className="fas fa-pen"></i> Modifier</Link>
                                <Link to="/projet/delete" className="btn-danger"><i className="fas fa-trash-alt"></i> Supprimer</Link>
                            </div>
                            <div className="contenu-list">
                                <table>
                                    <tr>
                                        <td className="first-td">Titre du projet :</td>
                                        <td>Illustator</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Montant du devis :</td>
                                        <td>1500$</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Délais de réalisation :</td>
                                        <td>150 jours</td>
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
                                    <tr>
                                        <td className="first-td">Stacks utilisés :</td>
                                        <td>Stacks utilisés</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Coût horaire/jour:</td>
                                        <td>140 $</td>
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

export default ListProject
