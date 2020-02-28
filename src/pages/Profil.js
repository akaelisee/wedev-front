import React, { Component } from 'react';


export default class Profil extends Component {
    render() {
        return (
            <form>
                <div className="profil">
                    <div className="cadre-profil">
                        <div className="form-group">
                            <label for="imgprofil">Photo de profil</label>
                            <input type="file" id="imgprofil" name="photodeprofil" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nom</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="form-group">
                            <label for="firstname">Prenom</label>
                            <input type="text" className="form-control" id="firstname"/>
                        </div>
                        <div className="form-group">
                            <label for="id_company">Entreprise</label>
                            <input type="text" className="form-control" id="id_company"/>
                        </div>
                        <div className="form-group">
                            <label for="mail">Email</label>
                            <input type="email" className="form-control" id="mail" aria-describedby="email"/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Numéro de téléphone</label>
                            <input type="text" className="form-control" id="phone"/>
                        </div>
                        <div className="form-group">
                            <label for="psw">Mot de passe</label>
                            <input type="password" className="form-control" id="psw"/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
