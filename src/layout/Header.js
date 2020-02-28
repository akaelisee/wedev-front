import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import reactCSS from 'reactcss';

  class Header extends Component {

    constructor(props){
      super(props)
  
      this.state = {
        scrolled : false,
        scrolledLeft : false
      }
    }
  
    componentDidMount() {
      //Scroll Navbar
      window.addEventListener('scroll', ()=> {
        const IsTop = window.scrollY < 680 ;
        const IsLeft = window.scrollY < 100;
        const IsLeft1 = window.scrollY < 800;

  
        if(IsTop !== true) {
          this.setState({ scrolled : true})
        }else{
          this.setState({ scrolled : false})
        }
        if( IsLeft === false) {
          this.setState({ scrolledLeft : true })
        } else if (IsLeft1 === true)
          this.setState({scrolledLeft : false})
      });
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll');
    }

    render(){

      const styles = reactCSS({
        'default' : {
          opacityHide : {
            opacity : '0',
            transition : '0.4s',
            visibility: 'hidden'
          },
          opacityShow : {
            opacity : '1',
            transition : '0.4s'
          },
          social : {
            position : 'relative',
            top : '600px',
            opacity : '0',
            transition : '0.5s',
            visibility: 'hidden'

          }

        }
      })

        return (
          //Header
            <div className = "header__main">
                <nav className ={ this.state.scrolled ? 'scroll' : 'header-nav' }>
                   <div className = "logo">
                     <Link to = "/"> <img src = { logo } alt ="" /> </Link> 
                   </div>
                   <div className = "login_button">
                      <a href = "/Profil"> LOGIN </a>
                   </div>
                </nav>
                <div className = { this.state.scrolledLeft ? 'header-inscrit' : 'header-inscrit'}  
                    style = { this.state.scrolledLeft ? styles.opacityHide : styles.opacityShow }>
                    <div className = "header-desc">
                      <p> Où que vous soyez </p>
                      <p> Restez <span> Freelance </span></p>
                      <a href = "/" className= "inscris"> INSCRIVEZ-VOUS </a> 
                    </div>
                </div>    
                    <div className = "header-down" style = { this.state.scrolledLeft ? styles.social : styles.opacityShow }>
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