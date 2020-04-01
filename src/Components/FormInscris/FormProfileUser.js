import React, { Component } from 'react'

export default class FormProfileUser extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            list_status : {},
            list_profil: {},
            test: ""
        }
    }

    continue = e => {
        e.preventDefault()
        this.props.nextForm()
    }
    
    getProfil() {
        fetch("https://vast-headland-40106.herokuapp.com/api/user_profile")
            .then(res => res.json())
            .then(arr => {
                let new_tab = [];
                arr.data.map((item) => {
                    new_tab.push(item.label)
                })
            this.setState({list_profil: arr})
        })
            .catch(err => console.error('ERROR: ' , err))
    }

    getStatus(){
        fetch("https://vast-headland-40106.herokuapp.com/api/corporate")
            .then(res => res.json())
            .then(arr => {
                let new_tab = [];
                arr.data.map((item) => {
                    new_tab.push(item.label)
                })
                this.setState({list_status: arr})
        })
            .catch(err => console.error('ERROR: ' , err))
    }

    
    componentDidMount(){
        //fetch to get list status and profil
        this.getStatus()
        this.getProfil()
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
        const all_status = this.state.list_status.data.map((item, key) => {
        return <option value={key}>{item.label}</option>
        })

        const all_profil = this.state.list_profil.data.map((item, key) =>{
            return <option value={key}>{item.label}</option>
        }) 
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
                                    {/* <option value = "SAS"> Status Société </option> 
                                    <option value = "SAS"> SAS</option> 
                                    <option value = "SASU"> SASU</option> 
                                    <option value = "Auto-entrepreneur"> Auto-entrepreneur</option> 
                                    <option value = "EURL"> EURL</option> 
                                    <option value = "SARL"> SARL</option>  */}
                                    {all_status}
                                </select>
                            </div>
                            <div className="box-select box">
                                <select value = {profil}>
                                    {/* <option value = "back"> Votre profil</option> 
                                    <option value = "back"> Développeur Back</option> 
                                    <option value = "front"> Développeur Front</option> 
                                    <option value = "data"> Big data</option> 
                                    <option value = "analyst"> Analyst</option> 
                                    <option value = "qa"> QA</option>  */}
                                    {all_profil}
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
