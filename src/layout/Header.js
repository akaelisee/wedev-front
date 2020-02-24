import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';

  class Header extends Component {

    render(){
        return (
          //Header
            <div className = "header__main">
                <nav className ="header-nav">
                   <div className = "logo">
                     <Link to = "/"> <img src = { logo } alt ="" /> </Link> 
                   </div>
                   <div className = "login_button">
                      <a href = "/"> LOGIN </a>
                   </div>
                </nav>
                <div className = "header-inscrit">
                    <div className = "header-desc">
                      <p> Où que vous soyez </p>
                      <p> Restez <span> Freelance </span></p>
                      <a href = "/" className= "inscris"> INSCRIVEZ-VOUS </a> 
                    </div>
                </div>    
                    <div className = "header-down">
                      <div className = "social">
                        <ul>
                          <li> <a href = "/" className = "facebook iconbtn"> <i className="fab fa-facebook-f"></i> </a> </li>
                          <li> <a href = "/" className ="twitter iconbtn"> <i className="fab fa-twitter"></i> </a> </li>
                          <li> <a href = "/" className="linkedin iconbtn"> <i className="fab fa-linkedin-in"></i> </a> </li>
                        </ul>
                      </div>
                      <div className = "btn-selector">
                        <ul className = "btn-item">
                          <li> 
                              <a href = "/" className="active"> Explore <span> <i className="fas fa-chevron-down"></i> </span></a>
                              <ul className="sousMenu">
                                <li> <a href = "/"> Composants </a>  </li>
                                <li> <a href = "/"> Composants </a> </li>
                                <li> <a href = "/"> Composants </a> </li>
                              </ul>
                          </li>
                        </ul>
                      </div> 
                    </div>
                </div>
        )
    }
}

export default Header;