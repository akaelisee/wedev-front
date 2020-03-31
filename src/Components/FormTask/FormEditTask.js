import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class FormEditTask extends Component {
    render() {
        return (
            <div className="add-task">
                <div className="card">
                    <div className="add-title">
                        <div className="edit-title-task">
                            <h3> Modifier une tâche</h3>   
                        </div>
                    </div>
                    <form className="form-add">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname"
                                required/>
                            <label htmlFor="firstname" className="label-name">Titre de la tâche</label>
                        </div>
                        <div className="form-textarea">
                            <label htmlFor="mail" className="label-name" > Description</label>
                            <textarea maxLength="1000" rows="5"></textarea>
                        </div>
                        <div className="form-radio">
                            <label htmlFor="name"  className="label-name" >Encours</label>
                            <input 
                                type="radio" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-namee" >Terminé</label>
                            <input 
                                type="radio" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-namee" >A faire</label>
                            <input 
                                type="radio" 
                                name="phone"
                                required/>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-name" >Temps de réalisation</label>
                        </div>
                        <div className="form-select">
                            <div className="box-select box">
                                <select>
                                    <option value = "back"> Sprint</option> 
                                    <option value = "back"> Sprint</option> 
                                </select>
                            </div>
                        </div>
                        <div className="btn-link">
                            <input type="submit" className="btn-submit"/>
                            <Link to="/task" className="btn-annul"> Annuler</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormEditTask
