import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  class Header extends Component {
     
    render(){
        return (
          //Header
            <header className = "header__main">
                <nav className = "header-nav">
                   <div className = "logo">
                     <Link to = "/"> Logo </Link> 
                   </div>
                   <div className = "login_button">
                      <button> LOGIN </button>
                   </div>
                </nav>
                <div className = "header-desc">
                  <p> Où que vous soyez <span> Restez <strong> Freelance </strong>  </span> </p>
                  <button> Inscrivez-Vous </button> 
                </div>
                <div className = "header-down">
                  <div className = "social">
                    <ul>
                      <li> <a href = "/"> FaceBook </a> </li>
                      <li> <a href = "/"> FaceBook </a> </li>
                      <li> <a href = "/"> FaceBook </a> </li>
                    </ul>
                  </div>
                  <div className = "button-selector">
                    <ul>
                      <li> <a href = "/"> Explore <span> la fléche </span></a> </li>
                      <li>
                        <ul>
                           <li> <a href = "/"> Explore <span> les composants </span></a> </li>
                           <li> <a href = "/"> Explore <span> les composants </span></a> </li>
                           <li> <a href = "/"> Explore <span> les composants </span></a> </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </header>
        )
    }
}

export default Header;