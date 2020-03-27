import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class listCustomer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             redirect : false,
             mail :'',
             password: ''
        }
    }
    render() {
        return (
            <div className="main">
                <div className="list">
                    <div className="list-content animate-list">
                        <div className="close-list">
                            <span className="title">Données Personnelles</span>
                            <span onClick={this.props.popUp} className="closee" title="Close Modal">&times;</span>
                        </div>
                        <div className="list-donnee">
                            <div className="edit-info">
                                <p className="name-profil"> Client n°  </p>
                                <div className="ngcontent">
                                    <label className="label-detail"> Nom </label>
                                    <p>Aka</p>
                                </div>
                                <div className="ngcontent">
                                    <label className="label-detail"> Prénoms </label>
                                    <p>Jean</p>
                                </div>
                                <div className="ngcontent">
                                    <label className="label-detail"> Dénomination sociale </label>
                                    <p> Sociale</p>
                                </div>
                                <div className="ngcontent">
                                    <label className="label-detail"> Adresse </label>
                                    <p>Adresse</p>
                                </div>
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
                    </div>
                </div>

            </div>
        )
    }
}

export default listCustomer;