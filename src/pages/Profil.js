import React, { Component } from 'react';


export default class Profil extends Component {
    render() {
        return (
            <form>
                <div className="profil">
                    <div className="cadre-profil">
                        <div className="form-group file">
                            <label for="imgprofil">Photo de profil</label>
                            <input type="file" id="imgprofil" name="photodeprofil" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="user-profil">
                            <div className="form-group form-profil">
                                <label for="name">Nom</label>
                                <div>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                            </div>
                            <div className="form-group form-profil">
                                <label for="firstname">Prenom</label>
                                <div>
                                    <input type="text" className="form-control" id="firstname"/>
                                </div>
                            </div>
                            <div className="form-group form-profil">
                                <label for="id_company">Entreprise</label>
                                <div>
                                    <input type="text" className="form-control" id="id_company"/>
                                </div>
                            </div>
                            <div className="form-group form-profil">
                                <label for="mail">Email</label>
                                <div>
                                    <input type="email" className="form-control" id="mail" aria-describedby="email"/>
                                </div>
                            </div>
                            <div className="form-group form-profil">
                                <label for="phone">Numéro de téléphone</label>
                                <div>
                                    <input type="text" className="form-control" id="phone"/>
                                </div>
                            </div>
                            <div className="form-group form-profil">
                                <label for="psw">Mot de passe</label>
                                <div>
                                    <input type="password" className="form-control" id="psw"/>
                                </div>
                            </div>
                            <div className= "form-group">
                                <input type="submit" value="Valider"/>
                                <input type="reset" value="Annuler"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
