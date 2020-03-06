import React, { Component } from 'react'

export default class Taches extends Component {
    render() {
        return (
            <form>
                <div className="Tachesinfo">
                <div className="col-sm-12">
                    <h3>Taches</h3>
                <div className="project-content-area">
                    <div className="col-sm-4">
                        <h4>Informations</h4>
                        <div className="project-info">
                                <div className="info">
                                <p><i className="lnr lnr-user"></i><span>Titre : </span></p>
                                <input type="text" id="titree" name="titree"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-star"></i><span>Description : </span></p>
                                    <input type="text" id="description" name="description"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Statut : </span></p>
                                    <input type="text" id="statue" name="statue"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Temps de réalisation : </span></p>
                                    <input type="text" id="tempsreal" name="tempsreal"/>
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
