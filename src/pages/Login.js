import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
                <form className="modal-content animate">
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

