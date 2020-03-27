import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import user from '../assets/img/user-1.jpg'
import EditProfilInfo from '../Components/EditFormProfil/EditProfilInfo'
import EditProfilDetail from '../Components/EditFormProfil/EditProfilDetail'
import Dashboard from './Dashboard';

export class Myprofil extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             infoPerso : false,
             detailPerso : false
        }
        this.handleEditInfo = this.handleEditInfo.bind(this)
        this.handleEditDetail = this.handleEditDetail.bind(this)
    }
    
    handleEditInfo = () => {
        this.setState({
            infoPerso : true
        })
        document.querySelector('.info').style.display = "none";
    }

    handleEditInfoFalse = () => {
        this.setState({
            infoPerso : false
        })
        document.querySelector('.info').style.display = "block";
    }

    handleEditDetail = () => {
        this.setState({
            detailPerso : true
        })
        document.querySelector('.detail').style.display = "none";
    }

    handleEditDetailFalse = () => {
        this.setState({
            detailPerso : false
        })
        document.querySelector('.detail').style.display = "block";
    }

    funcInfo = () =>{
        const {infoPerso} = this.state;
        if(infoPerso)
            return (
                <EditProfilInfo 
                    handleEditInfoFalse = {this.handleEditInfoFalse}
                />
                )
        else
            return null;
    }

    funcDetail = () =>{
        const {detailPerso} = this.state;
        if(detailPerso)
            return (
                <EditProfilDetail 
                    handleEditDetailFalse = {this.handleEditDetailFalse}
                />
            )
        else
            return null;
    }


    render() {
        return (
            <>
            <Dashboard />
            <div className="main">
                <div className="main-profil">
                    <div className="img-profil">
                        <img src = { user } alt ="user" className="img-avatar" />
                        <p className="name-profil">Aka jean elisee</p>
                    </div>
                    <div className="info-profil">
                        <p> Développeur Front end, <a href="" className="compagny"> Compagny </a></p>
                    </div>
                    <div className="link-profil">
                        <button className="drop-profil">Supprimer ce compte <i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <div className="edit-profil">
                    {this.funcInfo()}
                    <div className="info-perso info">
                        <div className="edit-header">
                            <h3 className="edit-title">INFORMATIONS PERSONNELLES </h3>
                            <Link href="" className="btn-edit" onClick= {this.handleEditInfo}> Modifier <i className="fas fa-pencil-alt"></i> </Link>
                        </div>
                        <div className="edit-info">
                            <p className="name-profil"> Jean Elisee Aka </p>
                            <div className="ngcontent">
                                <label className="label-detail"> Email </label>
                                <p>Example@ynov.com</p>
                            </div>
                            <div className="ngcontent phone">
                                <label className="label-detail"> Téléphone </label>
                                <p>+33 05 54 12 45 78</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-compagny">
                        {this.funcDetail()}
                        <div className="info-perso detail">
                            <div className="edit-header">
                                <h3 className="edit-title">DÉTAILS PROFESSIONNELS</h3>
                                <Link href="" className="btn-edit" onClick={this.handleEditDetail} > Modifier <i className="fas fa-pencil-alt"></i> </Link>
                            </div>
                            <div className="edit-info">
                                <p className="name-profil"> Développeur Front End</p>
                                <div className="ngcontent phone">
                                    <label  className="label-detail">Status Société </label>
                                    <p> <span>SARL</span></p>
                                </div>
                                <div className="ngcontent">
                                    <label  className="label-detail"> Société </label>
                                    <p><a href =""> Ynov Campus</a></p>
                                </div>
                                <div className="ngcontent phone">
                                    <label  className="label-detail">Siret </label>
                                    <p>71 852 789 451 457</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default Myprofil
