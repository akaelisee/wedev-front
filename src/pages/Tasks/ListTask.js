import React, { Component } from 'react'
import Dashboard from '../Dashboard';
import ImageGrey from '../../assets/img/Capture.PNG'
import {Link} from 'react-router-dom';

export class ListTask extends Component {
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
                    <div className="main-list-project">
                        <img src={ImageGrey} alt="" />
                        <div className="float-right">
                            <h3> Projet Name / Task #140</h3>
                            <h2> Task Name</h2>
                            <div className="btn-list">
                                <Link to="/task/edit" className="btn-success"><i className="fas fa-pen"></i> Modifier</Link>
                                <Link to="#" className="btn-danger"><i className="fas fa-trash-alt"></i> Supprimer</Link>
                            </div>
                            <div className="contenu-list">
                                <table>
                                    <tr>
                                        <td className="first-td">Titre Tâche :</td>
                                        <td>Titre Tâche</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td"> Statut :</td>
                                        <td><span>En cours</span></td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">Temps de réalisation :</td>
                                        <td>12 déc 2018</td>
                                    </tr>
                                </table>
                                <div className="desc-task">
                                    <label>Description : </label>
                                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ListTask
