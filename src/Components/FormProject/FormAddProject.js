import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class FormAddProject extends Component {

    constructor(props) {
        super(props)
        this.state ={
            title: "",
            montant: "",
            delai : "",
            date_deb: "",
            date_fin: "",
            statut: "",
            stack: "",
            honoraire:"",
            client: {},
            user: ""
        }
        this.setState({user: this.props.id_user})
    }

    componentDidMount() {
        fetch("https://vast-headland-40106.herokuapp.com/api/customer")
            .then(res => res.json())
            .then(data => {
                this.setState({client: data.data})
            })
            .catch(err => console.error(err))
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        let form = new FormData()

        form.append("title", this.state.title)
        form.append("amount", this.state.montant)
        form.append("start_date", this.state.date_deb)
        form.append("end_date", this.state.date_fin)
        form.append("overall_date", this.state.delai)
        form.append("hourly_cost", this.state.honoraire)
        form.append("id_status", 2)
        form.append("id_customer", this.state.client)
        form.append("id_user", this.state.user)
        form.append("stack", this.state.stack)


        fetch("https://vast-headland-40106.herokuapp.com/api/project", 
            {
                method: "POST",
                body: form
            }
        )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div className="add-project">
                <div className="card">
                    <div className="add-title">
                        <div className="title">
                            <h3> Creer un projet</h3>   
                        </div>
                        <div className="nbr-project">
                            <label>0</label>
                            <p> Projet Créer</p>
                        </div>
                    </div>
                    <form className="form-add">
                        <div className="form-group">
                            <input
                                onChange={e => this.handleChange(e)} 
                                type="text" 
                                className="form-control" 
                                name="title"
                                required/>
                            <label htmlFor="title" className="label-name">Titre du projet</label>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={e => this.handleChange(e)} 
                                type="text" 
                                name="delai"
                                required/>
                            <label htmlFor="name" className="label-name" > Montant du devis</label>
                        </div>
                        <div className="form-textarea">
                            <label htmlFor="delai" className="label-name" > Délail de réalisation</label>
                            <textarea maxLength="1000" rows="5"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input
                                    onChange={e => this.handleChange(e)} 
                                    type="text" 
                                    name="date_deb"
                                    required/>
                                <label htmlFor="date_fin"  className="label-name" >Date de debut</label>
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={e => this.handleChange(e)} 
                                    type="text" 
                                    name="date_fin"
                                    required/>
                                <label htmlFor="date_fin"  className="label-name" >Date de fin</label>
                            </div>
                        </div>
                        <div className="form-radio">
                            <label htmlFor="statut"  className="label-name" >Encours</label>
                            <input
                                onChange={e => this.handleChange(e)} 
                                type="radio" 
                                name="statut"
                                required/>
                            <label htmlFor="statut"  className="label-namee" >Réalise</label>
                            <input
                                onChange={e => this.handleChange(e)} 
                                type="radio" 
                                name="statut"
                                required/>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={e => this.handleChange(e)} 
                                type="text" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-name" >Stacks utilisés</label>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={e => this.handleChange(e)} 
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
                            <input type="submit" className="btn-submit" value="Valider"/>
                            <Link to="/projet" className="btn-annul"> Annuler</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormAddProject
