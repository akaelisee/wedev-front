import React, { Component } from 'react';
import Typed from 'react-typed';
import { Redirect } from 'react-router-dom';
import FormProfileUser from '../Components/FormInscris/FormProfileUser'
import FormSocieteUser from '../Components/FormInscris/FormSocieteUser'

// import axios from 'axios';

export class Inscription extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            step : 1,
            redirect : false,
            firstname : '',
            name : '',
            compagny : '',
            siret : '',
            mail : '',
            phone : '',
            statut : '',
            profil : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.setRedirect = this.setRedirect.bind(this)
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    // Redirect Home
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () =>{
        if(this.state.redirect)
        return <Redirect to="/" />
    }

    //state incrementation form
    nextForm = () =>{
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    //state desincrementation form
    prevForm =()=>{
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }
    
    showStep =() => {
        const {step, firstname, name, mail,password, compagny, siret, phone, statut, profil} = this.state
        if(step === 1)
            return (
                <FormProfileUser
                    handleChange = {this.handleChange}
                    firstname = {firstname}
                    name = {name}
                    compagny = {compagny}
                    siret = {siret}
                    phone = {phone}
                    statut = {statut}
                    profil = {profil}
                    nextForm = {this.nextForm}
                />
            )
        else if (step === 2)
            return (
                <FormSocieteUser 
                    handleChange = {this.handleChange}
                    mail = {mail}
                    password = {password}
                    prevForm = {this.prevForm}
                />
            )
    }

    render(){
        return(
            <div className="animate relative">
                {this.renderRedirect()}
                <div className="close-div">
                    <span onClick = {this.setRedirect} className="close" title="Close Modal">&times;</span>
                </div>
                <div className="inscription-group ">
                    <div className="img-inscris">
                        <div className="typedjs">
                            <p> Démarrer la création de votre projet </p>
                            <p>Inscrivez-vous en deux minutes et commencez la création de votre projet, </p>
                            <p>
                                <Typed
                                    strings={[
                                        'En toute Sécurité',
                                        'En pensant projet',
                                        'En pensant argent &#128540;']}
                                    typeSpeed={60}
                                    backSpeed={50}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="inscris">
                        <form className="modal-content">
                            {this.showStep()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inscription ;
