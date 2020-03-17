import React, { Component } from 'react'

export default class FormProfileUser extends Component {
    
    continue = e => {
        e.preventDefault()
        this.props.nextForm()
    }
    
    render() {
        const {
                handleChange, 
                firstname, 
                name,
                compagny,
                siret,
                phone,
                statut,
                profil
                } = this.props;
        return (
            <>
                <div className="container-inscris">
                    <div className="container-title">
                        <span className="title">Démarrer votre Inscription</span>
                    </div>
                    <div className="body-inscris">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname"
                                value = {firstname}
                                onChange = {handleChange}
                                required/>
                            <label htmlFor="firstname" className="label-name">
                                <span className="content-name"> Nom </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                value = {name}
                                onChange = {handleChange} 
                                required/>
                            <label htmlFor="name" className="label-name" >
                                <span className="content-name"> Prénom </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                name="compagny" 
                                value = {compagny}
                                onChange = {handleChange}
                                required/>
                            <label htmlFor="compagny" className="label-name" >
                                <span className="content-name"> Sociéte </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="siret" 
                                value = {siret}
                                onChange = {handleChange}
                                required/>
                            <label htmlFor="siret" className="label-name" >
                                <span className="content-name"> Siret </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="phone"
                                value = {phone}
                                onChange = {handleChange}
                                required/>
                            <label htmlFor="phone"  className="label-name" >
                                <span className="content-name"> Télephone </span>
                            </label>
                        </div>
                        <div className="form-select">
                            <div className="box-select">
                                <select value = {statut}>
                                    <option value = "SAS"> Status Société </option> 
                                    <option value = "SAS"> SAS</option> 
                                    <option value = "SASU"> SASU</option> 
                                    <option value = "Auto-entrepreneur"> Auto-entrepreneur</option> 
                                    <option value = "EURL"> EURL</option> 
                                    <option value = "SARL"> SARL</option> 
                                </select>
                            </div>
                            <div className="box-select box">
                                <select value = {profil}>
                                    <option value = "back"> Votre profil</option> 
                                    <option value = "back"> Développeur Back</option> 
                                    <option value = "front"> Développeur Front</option> 
                                    <option value = "data"> Big data</option> 
                                    <option value = "analyst"> Analyst</option> 
                                    <option value = "qa"> QA</option> 
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="submitbtn">
                        <button onClick = {this.continue}>Suivant</button>
                    </div>
                </div>
            </>    
        )
    }
}
