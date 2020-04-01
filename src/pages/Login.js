import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

var sha1 = require('sha1')

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             redirect : false,
             mail :'',
             password: ''
        }

        this.handleChange = this.handleChange.bind(this) 
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        let form = new FormData()

        form.append("mail", this.state.mail)
        form.append("password", sha1(this.state.password))

        fetch("https://vast-headland-40106.herokuapp.com/login",
            {
                headers: {"Content-Type" : "application/x-www-form-url-encoded"},
                method: "POST",
                body: form
            }
        )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err=> console.error(err))

        this.setRedirect()
        this.renderRedirect()
    }

    // Redirect 
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () =>{
        if(this.state.redirect)
        return <Redirect to="/dashboard" />
    }

    render() {
        return (
            <div className="login">
                <form className="modal-content animate" onSubmit={this.handleSubmit()}>
                    <div className="imgcontainer">
                        <span onClick={this.props.popUp} className="close" title="Close Modal">&times;</span>
                    </div>
                    <div className="login-title">
                        <span className="title">Connexion</span>
                    </div>
                    <div className="container-login">
                        <div className="from-group">
                            <label htmlFor="mail"><b>Email</b></label>
                            <input type="text" placeholder="Example@ynov.com" name="mail" onChange={e=>this.handleChange(e)} value={this.state.mail} required/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={e=>this.handleChange(e)} value={this.state.password} required/>
                        </div>
                        
                        <button type="submit" className="submitbtn">Login</button>
                    </div>
                    <div className="container-login-account">
                        <span className="account"> Creer votre &nbsp;<Link to="/inscription" className="">Compte </Link></span>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;

