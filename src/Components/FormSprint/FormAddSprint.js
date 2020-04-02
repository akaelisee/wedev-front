import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class FormAddSprint extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id_sprint : '',
             title : '',
             title_project: '', //Titre project
             description : '',
             label : '', //Label status
             completion_time : ''
        }
        this.handleChange = this.handleChange.bind(this)
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
        const {title,  title_project, label,  completion_time} = this.state;
        return (
            <div className="add-sprint">
                <div className="card">
                    <div className="add-title">
                        <div className="title">
                            <h3> Creer un Sprint</h3>   
                        </div>
                        <div className="nbr-project">
                            <label>0</label>
                            <p> Sprint Crée</p>
                        </div>
                    </div>
                    <form className="form-add" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="title"
                                onChange={e=>this.handleChange(e)} 
                                value={title}
                                required/>
                            <label htmlFor="firstname" className="label-name">Titre du sprint</label>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="completion_time"
                                    onChange={e=>this.handleChange(e)} 
                                    value={completion_time}
                                    required/>
                                <label htmlFor="name"  className="label-name" >Date de debut</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="completion_time"
                                    onChange={e=>this.handleChange(e)} 
                                    value={completion_time}
                                    required/>
                                <label htmlFor="name"  className="label-name" >Date de fin</label>
                            </div>
                        </div>
                        <div className="form-radio">
                            <label htmlFor="name"  className="label-name" >Encours</label>
                            <input 
                                type="radio" 
                                name="label"
                                onChange={e=>this.handleChange(e)} 
                                value="En cours"
                                checked = {label === "En cours"}
                                />
                            <label htmlFor="name"  className="label-namee" >Terminé</label>
                            <input 
                                type="radio" 
                                name="label"
                                value="Terminé"
                                checked = {label === "Terminé"}
                                onChange={e=>this.handleChange(e)} 
                                />
                            <label htmlFor="name"  className="label-namee" >A faire</label>
                            <input 
                                type="radio" 
                                name="label"
                                onChange={e=>this.handleChange(e)} 
                                checked = {label === "A faire"}
                                value="A faire"
                                />
                        </div>
                        <div className="form-select">
                            <div className="box-select box">
                                <select value={title_project}>
                                    <option selected value = "back"> Selectionner un projet </option> 
                                    <option value = "title_project"> Projet</option> 
                                    <option value = "title_project"> Illustrator</option> 
                                </select>
                            </div>
                        </div>
                        <div className="btn-link">
                            <input type="submit" className="btn-submit"/>
                            <Link to="/sprint" className="btn-annul"> Annuler</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormAddSprint
