import React, { Component } from 'react'

export default class Inscription extends Component {
    render() {
        return (
            <form>
               <div className="form-group">
                   <label for="inputemail">Email</label>
                   <input type="email" className="form-control" id="inputemail" aria-describedby="email"/>
               </div>
               <div className="form-group">
                   <label for="psw">Mot de passe</label>
                   <input type="password" className="form-control" id="psw"/>
               </div>
               <div className="form-group">
                   <label for="psw-repeat">Resaisir votre mot de passe</label>
                   <input type="password" className="form-control" id="psw-repeat"/>
               </div>
               <div className="form-group form-check">
                   <input type="checkbox" className="form-check-input" id="checked"/>
                   <label className="form-check-label" for="checked">Se souvenir de moi</label>
               </div>
               <button type="submit" className="btn btn-primary">Inscription</button>
               <button type="reset" className="btn btn-danger">Annuler</button>
           </form>
        )
    }
}
