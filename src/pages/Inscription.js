import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import { Redirect } from 'react-router-dom';

var sha1 = require('sha1')
// import axios from 'axios';

export class Inscription extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            redirect : false,
            firstname : '',
            name : '',
            mail : '',
            password : '',
            psw_repeat: ''
        }

        this.handleChange = this.handleChange.bind(this) 
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
  
    componentDidMount(){
        // fetch
    }

    // Redirect Home
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () =>{
        if(this.state.redirect)
        return <Redirect to="/" />
    }

    handleSubmit(event)
    {
        let form = new FormData();
        
        form.append('firstname', this.state.firstname)
        form.append('name', this.state.name)
        form.append('mail', this.state.mail)
        if (this.state.psw_repeat === this.state.password )
            form.append('password', sha1(this.state.password))
        this.setRedirect();

        fetch("https://vast-headland-40106.herokuapp.com/user", {
            headers: {},
            method : "POST",
            body: form
        })
        .then(resp => {return(resp.json())})
        .then(data => console.log('JSON => ', data))
        event.preventDefault()
    }

    render(){
        return(
            <div className="inscription-group">
                <div className="logo-inscris">
                    <Link to = "/" className="img-inscris"> <img src = { logo } alt ="" /> </Link>
                </div>
                <div className="inscris">
                    <form className="modal-content animate" onSubmit={this.handleSubmit()}>
                        <div className="imgcontainer">
                            {this.renderRedirect()}
                            <span onClick={this.setRedirect} className="close" title="Close Modal">&times;</span>
                        </div>
                        <div className="container-login">
                            
                            <span className="title">Inscription</span>
                            
                            <div className="form-group">
                                <label htmlFor="firstname">Nom</label>
                                <input type="text" className="form-control" name="firstname" placeholder="Enter Nom" onChange={e=>this.handleChange(e)} value={this.state.firstname} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Prenoms</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Prenoms" onChange={e=>this.handleChange(e)} value={this.state.name} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control" name="mail" placeholder="Example@ynov.fr" onChange={e=>this.handleChange(e)} value={this.state.mail} aria-describedby="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="psw">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={e=>this.handleChange(e)} value={this.state.password} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="psw-repeat">Confirmer votre mot de passe</label>
                                <input type="password" className="form-control" name="psw-repeat" placeholder="Confimr password" required/>
                            </div>
                        </div>
                        <div className="container-login submitbtn">
                            <button type="button">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Inscription ;
