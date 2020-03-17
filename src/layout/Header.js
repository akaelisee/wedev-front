import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import Login from '../pages/Login'
// import Login from '../pages/Login';
  class Header extends Component {

    constructor(props){
      super(props)
  
      this.state = {
        scrolled : false,
        scrolledLeft : false,
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
  
    componentDidMount() {
      //Scroll Navbar
      window.addEventListener('scroll', ()=> {
        const IsTop = window.scrollY < 730 ;

        let percentIns = (window.scrollY * 100) / 490;
        percentIns = percentIns > 100 ? 100 : percentIns;

        let percentSocio = (window.scrollY * 100) / 100;
        percentSocio = percentSocio > 100 ? 100 : percentSocio;

        document.querySelector('.header-inscrit').style.opacity = (1 - (percentIns/100));
        document.querySelector('.header-down').style.opacity = (1 - (percentSocio/100));

        if(percentSocio === 1){
            document.querySelector('.header-down').style.visibility = "hidden";
        }else if (percentSocio < 1){
          document.querySelector('.header-down').style.visibility = "visible";
        }else if(IsTop !== true) {
          this.setState({ scrolled : true})
        }else{
          this.setState({ scrolled : false})
        }
      });
    }
  
    // componentWillUnmount() {
    //   window.removeEventListener('scroll');
    // }
      

    render(){
        return (
          //Header
            <div className = "header__main">
              <div className="header-fixed">
                  <nav className = {this.state.scrolled ? 'scroll' : 'header-nav'}>
                    <div className = "logo">
                      <Link to = "/" className="logo-lien"> <img src = { logo } alt ="" /> </Link> 
                    </div>
                    <div className = "login_button">
                        <Link to="" onClick = {this.togglePopup} className="login-link"> Login </Link>
                    </div>
                  </nav>
                  {this.state.showPopup ? <Login popUp={this.closePopup}/>: null}
              </div>  
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