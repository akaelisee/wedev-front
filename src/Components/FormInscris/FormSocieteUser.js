import React, { Component } from 'react'

export class FormSocieteUser extends Component {

    previous = (e) => {
        e.preventDefault();
        this.props.prevForm()
    }
    render() {
        const {handleChange, mail, password} = this.props;
        return (
            <>  
                <div className="container-inscris">
                    <div className="container-title">
                        <span className="title">Finaliser votre Inscription</span>
                    </div>
                    <div className="body-form">
                        <div className="form-group">
                            <input 
                                type="text"  
                                name="mail"
                                value = {mail}
                                onChange = {handleChange}
                                required/>
                            <label htmlFor="mail" className="label-name" >
                                <span className="content-name"> Email </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="password"
                                value = {password}
                                onChange = {handleChange} 
                                required/>
                            <label htmlFor="password" className="label-name" >
                                <span className="content-name"> Mot de passe </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="password" 
                                value = {password}
                                onChange = {handleChange} 
                                required/>
                            <label htmlFor="password" className="label-name" >
                                <span className="content-name"> Confirmez le mot de passe </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container-inscris btn">
                    <button className="btnprev" onClick = {this.previous}>Precédent</button> &nbsp;&nbsp;
                    <button className="btnsubmit">Valider</button>
                </div>
            </>
        )
    }
}

export default FormSocieteUser
