import React, { Component } from 'react'

export default class Sprints extends Component {
    render() {
        return (
            <form>
                <div className="sprintsinfo">
                <div className="col-sm-12">
                    <h3>Sprints</h3>
                <div className="project-content-area">
                    <div className="col-sm-4">
                        <h4>Informations</h4>
                        <div className="project-info">
                                <div className="info">
                                <p><i className="lnr lnr-user"></i><span>Titre : </span></p>
                                <input type="text" id="titre" name="titre"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-star"></i><span>Date de début : </span></p>
                                    <input type="text" id="datedeb" name="datedeb"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Date de fin : </span></p>
                                    <input type="text" id="datefin" name="datefin"/>
                                </div>
                                <div className="info">
                                    <p><i className="lnr lnr-calendar-full"></i><span>Statut : </span></p>
                                    <input type="text" id="status" name="status"/>
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
