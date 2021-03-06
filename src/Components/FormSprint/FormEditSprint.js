import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class FormEditSprint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id : '',
             title : '',
             title_project: '', //Titre project
             description : '',
             label : '', //Label status
             completion_time : ''
        }
    }

    handleChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
		e.preventDefault();
		console.log('d');
	}
    render() {
        return (
            <div className="add-sprint">
                <div className="card">
                    <div className="add-title">
                        <div className="edit-title-sprint">
                            <h3> Modifier le Sprint</h3>   
                        </div>
                    </div>
                    <form className="form-add">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname"
                                required/>
                            <label htmlFor="firstname" className="label-name">Titre du sprint</label>
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
                        <div className="form-select">
                            <div className="box-select box">
                                <select>
                                    <option value = "back"> Projet</option> 
                                    <option value = "back"> Illustrator</option> 
                                </select>
                            </div>
                        </div>
                        <div className="btn-link">
                            <input type="submit" className="btn-submit"/>
                            <Link to="/sprint/list" className="btn-annul"> Annuler</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormEditSprint
