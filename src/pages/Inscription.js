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

    handleSubmit(e) {
        let form_user = new FormData();
        let form_company = new FormData();

        
        form_company.append("id_corporate", this.state.statut)
        form_company.append("label", this.state.compagny)
        form_company.append("siret", this.state.siret)

        fetch("https://vast-headland-40106.herokuapp.com/api/company", 
            {
                method: "POST",
                body: form_company
            }
        )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))


        form_user.append("firstname", this.state.firstname)
        form_user.append("name", this.state.name)
        form_user.append("id_company", this.state.)
        form_user.append("mail", this.state.firstname)
        form_user.append("phone", this.state.firstname)
        form_user.append("id_profil", this.state.profil)

        fetch("https://vast-headland-40106.herokuapp.com/api/user", 
            {
                method: "POST",
                body: form_user
            }
        )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        
        // redirect
        this.setRedirect();
        this.renderRedirect()
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
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

    //state incrementation form_user
    nextForm = () =>{
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    //state desincrementation form_user
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
                        <form_user className="modal-content" onSubmit={this.handleSubmit()}>
                            {this.showStep()}
                        </form_user>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inscription ;
