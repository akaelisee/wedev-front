import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import Login from '../pages/Login'
// import Login from '../pages/Login';
  class Header extends Component {

    constructor(props){
      super(props)
  
      this.state = {
        showPopup : false
      }
      this.togglePopup = this.togglePopup.bind(this);
      this.closePopup  = this.closePopup.bind(this)
    }
    // state login true
    togglePopup() {
      this.setState({
        showPopup : true
      })
    }

    // state login false
    closePopup() {
      this.setState({
        showPopup : false
      })
    }
      
    render(){
        return (
          //Header
            <div className = "header__main">
              <nav className ="header-nav">
                <div className = "logo">
                  <Link to = "/" className="logo-lien"> <img src = { logo } alt ="" /> </Link> 
                </div>
                <div className = "login_button">
                    <Link to="" onClick = {this.togglePopup} className="login-link"> Login </Link>
                </div>
                {this.state.showPopup ? <Login popUp={this.closePopup}/>: null} 
              </nav>
              <div className = "header-inscrit">
                  <div className = "header-desc">
                    <p> Où que vous soyez </p>
                    <p> Restez <span> Freelance </span></p>
                    <Link to = "/inscription" className= "inscris"> INSCRIVEZ-VOUS </Link> 
                  </div>
              </div>    
              <div className = "header-down">
                <div className = "social">
                  <ul>
                    <li> <a href = "/" className ="facebook iconbtn"> <i className="fab fa-facebook-f"></i> </a> </li>
                    <li> <a href = "/" className ="twitter iconbtn"> <i className="fab fa-twitter"></i> </a> </li>
                    <li> <a href = "/" className="linkedin iconbtn"> <i className="fab fa-linkedin-in"></i> </a> </li>
                  </ul>
                </div>
                <div className = "btn-selector">
                  <ul className = "btn-item">
                    <li> 
                        <a href = "/" className="active"> <span> Explore </span> <i className="fas fa-chevron-down"></i></a>
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
        )
    }
}

export default Header;