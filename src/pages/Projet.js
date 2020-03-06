import React, { Component } from 'react'

export default class projet extends Component {
    render() {
        return (
           <form>
               <div className="projetinfo">
                <div className="col-sm-12">
                    <h3>Projets</h3>
                <div className="project-content-area">
                    <div className="col-sm-4">
                        <h4>Informations</h4>
                        <div className="project-info">
                                <div className="info">
                                <p><i className="lnr lnr-user"></i><span>Titre du projet : </span></p>
                                <input type="text" id="titre" name="titre"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-star"></i><span>Montant du devis : </span></p>
                                    <input type="text" id="devis" name="devis"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Date de début : </span></p>
                                    <input type="text" id="debut" name="debut"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Date de fin : </span></p>
                                    <input type="text" id="fin" name="fin"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr fa-clock-o"></i><span> Délais de réalisation (en jour) : </span></p>
                                	<input type="text" id="delais" name="delais"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Statut : </span></p>
                                    <input type="text" id="statut" name="statut"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Stacks utilisés : </span></p>
                                    <input type="text" id="stacks" name="stacks"/> 
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Coût horaire jour : </span></p>
                                    <input type="text" id="cout" name="cout"/>
                                </div>
                                </div>
               			</div>
                       </div>
                       <br/>
                       <div className= "form-group">
                            <input type="submit" value="Valider"/>
                            <input type="reset" value="Annuler"/>
                        </div>
                    </div>
                    </div>
            </form>
             
        )
    }
}