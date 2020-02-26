import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProjectBody extends Component {
    render() {
        return (
            <div className= "projects">
                <div className = "project-outils">
                    <div className="outils">
                        {/*outils */}
                        <Link to ="/" className="lien-info">Comment ça marche ?</Link>
                        <p className="texte-outil"> Tous vos outils de dev <br/> réuni sur une <br/> seule application</p>

                        <p className="text-outil-down">Lorem ipsum dolor sit amet, consectetur <br/>
                            adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className="projetsprint">
                        <div className="projet">
                            <label> 1 </label>
                            <p className="position"> Créer vos projets </p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="sprint">
                            <label> 2 </label>
                            <p className="position">  Ajouter vos sprints </p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="taches">
                            <label>3 </label>
                            <p className="position"> Affecter vos tâches </p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
