import React, { Component } from 'react';
import logo from '../assets/svg/logo-footer.svg';



 class Footer extends Component {
    render(){
        return (
                <footer className = "footer-down">
                    <div className="logo-footer">
                        <a href="/"> <img src = { logo } alt ="logo" />  </a>
                    </div>
                    <div className="copy">
                        <p>Copyright 2020</p>
                    </div>
                    <div className = "social-footer">
                      <ul>
                        <li> <a href = "/" className = "facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li> <a href = "/" className = "twitter"><i className="fab fa-twitter"></i></a></li>
                        <li> <a href = "/" className = "linkedin"> <i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                </footer>
        )
    }
}

export default Footer;