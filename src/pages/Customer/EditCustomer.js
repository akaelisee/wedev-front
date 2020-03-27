import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import {Link} from 'react-router-dom'

export class EditCustomer extends Component {
    render() {
        return (
            <>
            <Dashboard />
            <div className ="main">
                <div className ="main-add">
                    <div className ="card">
                        <div className="title">
                            <h3 className="edit-title">Modification le client : </h3>
                        </div>
                         <div className="body-inscris">
                             <form>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="firstname"
                                        required/>
                                    <label htmlFor="firstname" className="label-name">Nom</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name"
                                        required/>
                                    <label htmlFor="name" className="label-name" > Prénom</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        name="compagny" 
                                        required/>
                                    <label htmlFor="mail" className="label-name" > Email</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="phone"
                                        required/>
                                    <label htmlFor="name"  className="label-name" >Télephone</label>
                                </div>
                                <div className="btn-link">
                                    <input type="submit" className="btn-submit"/>
                                    <Link to="/client" className="btn-annul"> Annuler</Link>
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
            </>

        )
    }
}

export default EditCustomer;