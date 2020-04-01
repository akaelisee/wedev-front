import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import {Link} from 'react-router-dom'

export class AddCustomer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstname : '',
            name : '',
            mail : '',
            phone : '',
            id_corporate : ''
        }

        this.handleChange = this.handleChange.bind(this) 
    }
    handleChange (e) {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        let form = new FormData();
        form.append('firstname', this.state.firstname)
        form.append('name',this.state.name)
        form.append('mail', this.state.mail)
        form.append('phone', this.state.phone)

        const url = 'https://vast-headland-40106.herokuapp.com/api/customer';
        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log('JSON =>', data))
        .catch(error => console.log(error.message));
    }
    render() {
        return (
            <>
            <Dashboard />
            <div className ="main">
                <div className ="main-addcusto">
                    <div className ="card">
                        <div className="title">
                            <h3 className="edit-title">Ajouter un client</h3>
                        </div>
                         <div className="body-inscris">
                             <form onSubmit={e=>this.handleSubmit(e)}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="firstname"
                                        value={this.state.firstname}
                                        onChange={e=>this.handleChange(e)}
                                        required/>
                                    <label htmlFor="firstname" className="label-name">Nom</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={this.state.name}
                                        onChange={e=>this.handleChange(e)}
                                        required/>
                                    <label htmlFor="name" className="label-name" > Prénom</label>
                                </div>
                                <div className="form-group">
                                    <input type="email" 
                                        name="mail" 
                                        value={this.state.mail}
                                        onChange={e=>this.handleChange(e)}
                                        required/>
                                    <label htmlFor="mail" className="label-name" > Email</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={e=>this.handleChange(e)}
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

export default AddCustomer;