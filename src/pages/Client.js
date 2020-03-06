import React, { Component } from 'react'

export default class Client extends Component {
    render() {
        return (
            <form>
                <div className="clientinfo">
                <div className="col-sm-12">
                    <h3>Clients</h3>
                <div className="project-content-area">
                    <div className="col-sm-4">
                        <h4>Informations</h4>
                        <div className="project-info">
                                <div className="info">
                                <p><i className="lnr lnr-user"></i><span>Dénomination sociale : </span></p>
                                <input type="text" id="social" name="social"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-star"></i><span>Adresse : </span></p>
                                    <input type="text" id="adresse" name="adresse"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Nom du contact : </span></p>
                                    <input type="text" id="nomcontact" name="nomcontact"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Prénom du contact : </span></p>
                                    <input type="text" id="prenomcontact" name="prenomcontact"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr fa-clock-o"></i><span> Téléphone : </span></p>
                                	<input type="text" id="tel" name="tel"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Mail : </span></p>
                                    <input type="text" id="mail" name="mail"/>
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
