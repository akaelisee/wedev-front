import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class FormEditProject extends Component {
    render() {
        return (
            <div className="add-project">
                <div className="card">
                    <div className="add-title">
                        <div className="edit-title">
                            <h3> Modifier le projet</h3>   
                        </div>
                    </div>
                    <form className="form-add">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname"
                                required/>
                            <label htmlFor="firstname" className="label-name">Titre du projet</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                required/>
                            <label htmlFor="name" className="label-name" > Montant du devis</label>
                        </div>
                        <div className="form-textarea">
                            <label htmlFor="mail" className="label-name" > Délail de réalisation</label>
                            <textarea maxLength="1000" rows="5"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="phone"
                                    required/>
                                <label htmlFor="name"  className="label-name" >Date de debut</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="phone"
                                    required/>
                                <label htmlFor="name"  className="label-name" >Date de fin</label>
                            </div>
                        </div>
                        <div className="form-radio">
                            <label htmlFor="name"  className="label-name" >Encours</label>
                            <input 
                                type="radio" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-namee" >Réalise</label>
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
                            <label htmlFor="name"  className="label-name" >Stacks utilisés</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-name" >Coût horaire jour</label>
                        </div>
                        <div className="form-select">
                            <div className="box-select box">
                                <select>
                                    <option value = "back"> Client</option> 
                                    <option value = "back"> Aka jean elisee</option> 
                                </select>
                            </div>
                        </div>
                        <div className="btn-link">
                            <input type="submit" className="btn-submit"/>
                            <Link to="/projet/list" className="btn-annul"> Annuler</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormEditProject
