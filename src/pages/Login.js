import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
  
    handleSubmit(event)
    {
        let form = new FormData();
        
        form.append('mail', this.state.mail)
        form.append('password', sha1(this.state.password))

        fetch("https://vast-headland-40106.herokuapp.com/login", {
            headers: {},
            method : "POST",
            body: form
        })
        // redirection vers le DashBoard
        event.preventDefault()
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

    render() {
        return (
            <div className="group-login">
                <div className="logo-login">
                    <Link to = "/" className="img-login"> <img src = { logo } alt ="" /> </Link>
                </div>
            <div className="login">
                <form className="modal-content animate" onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                        {this.renderRedirect()}
                        <span onClick={this.setRedirect} className="close" title="Close Modal">&times;</span>
                    </div>
                    <span className="title">Connexion</span>
                    <div className="container-login">
                        <div className="from-group">
                            <label htmlFor="mail"><b>Email</b></label>
                            <input type="text" placeholder="Example@gmail" name="mail" onChange={e=>this.handleChange(e)} value={this.state.mail} required/>
                        </div>
                        <div className="from-group">
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={e=>this.handleChange(e)} value={this.state.password} required/>
                        </div>
                        
                        <button type="submit" className="submitbtn">Login</button>
                        <div className="remember">
                            <label>
                                <input type="checkbox" name="remember"/> Remember me
                            </label>
                        </div>
                    </div>
                    <div className="container-login">
                        <button type="button" onClick={this.setRedirect} className="cancelbtn">Cancel</button>
                        <span className="account"><Link to="/inscription" className="">Create Account </Link></span>
                    </div>
                </form>
            </div>
            </div>

        )
    }
}

export default Login;

