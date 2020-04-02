import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export class FormAddTask extends Component {
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
        const {description,  start_date, end_date,  label, title} = this.state;

        return (
            <div className="add-task">
                <div className="card">
                    <div className="add-title">
                        <div className="title">
                            <h3> Creer une tâche</h3>   
                        </div>
                        <div className="nbr-project">
                            <label>0</label>
                            <p> Tâche Crée</p>
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
                            <textarea 
                                maxLength="1000" 
                                rows="5"
                                name="description"
                                onChange={e=>this.handleChange(e)}> 
                                {description}
                            </textarea>
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
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-name" >Temps de réalisation</label>
                        </div>
                        <div className="form-select">
                            <div className="box-select box">
                                <select value={title}>
                                    <option value = "title"> Selectionner un sprint</option> 
                                    <option value = "title"> Sprint</option> 
                                    <option value = "title"> Sprint</option> 
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

export default FormAddTask
