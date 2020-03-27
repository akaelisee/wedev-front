import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo-footer.svg';
import imageUser from '../assets/img/thumb-1.jpg';
// import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
     //SHOW deconnect
     settingFocus(){
        document.querySelector('.list-setting').style.display = "Block"
    }
    //Hide deconnec
    settingBlur() {
        document.querySelector('.list-setting').style.display = "none"
    }
    
    render() {
        return (
            <>
                <div className="dashboard">
                    {/* <Sidebar /> */}
                    <div className="group-sidebar">
                        <div className = "dashboard-logo">
                            <Link to = "/" className="logo-lien"> <img src = { logo } alt ="" /> </Link> 
                        </div>
                        <ul className="side-nav">
                            <li className="side-items">
                                <a href="/dashboard">
                                    <span className="icon-holder"><i className="fas fa-tachometer-alt"></i></span>
                                    <span className="title"> Dasboard</span>
                                </a>
                            </li>
                            <li className="side-items">
                                <Link to ="/profil">
                                    <span className="icon-holder"> <i className="fas fa-user-alt"></i> </span>
                                    <span className="title">Mon Profil</span>
                                </Link>
                            </li>
                            <li className="side-items">
                                <a href="/projet">
                                    <span className="icon-holder"><i className="fas fa-project-diagram"></i></span>
                                    <span className="title">Projet</span>
                                </a>
                            </li>
                            <li className="side-items">
                                <a href="/client">
                                    <span className="icon-holder"><i className="fas fa-project-diagram"></i></span>
                                    <span className="title">Client</span>
                                </a>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className="header">
                    <ul className="header-connect">
                        <li className="header-user">
                            <span className="image-user"> <Link> <img src ={ imageUser} alt="imageUser" /></Link> </span>
                            <Link onFocus= {this.settingFocus} onBlur={this.settingBlur}> <i className="fas fa-ellipsis-h menu"></i><span className="title">  AKa jean elisee</span></Link>
                            <ul className="list-setting anime">
                                <li>
                                    <Link to= "/dashboard/profil"  className="lien-item">
                                        <span className="icon-connect"><i className="fas fa-user-alt"></i></span>
                                        <span>Mon profil </span>
                                    </Link>
                                </li>
                                <li>
                                    <a href = "/dashboard"  className="lien-item">
                                        <span className="icon-connect"><i className="fas fa-power-off"></i></span>
                                        <span>Déconnexion</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
            
        )
    }
}

export default Dashboard
