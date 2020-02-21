import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProjectBody extends Component {
    render() {
        return (
            <div className= "projects">
                <div className="outils">
                    {/*outils */}
                    <Link to ="/">Comment ça marche ?</Link>
                    <p className="texte-outil">
                        Tous vos outils de dev
                        réuni sur une
                        seule application</p>
                    <p>Lorem ipsum dolor sit amet, consectetur
                       adipiscing elit, sed do eiusmod tempor incididunt 
                       ut labore et dolore magna aliqua.</p>
                </div>
                <div className="projetsprint">
                    <div className="projet">
                        <p><span>1</span><strong> Créer vos projets</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="sprint">
                        <p><span>2</span><strong> Ajouter vos sprints</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                           adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="taches">
                        <p><span>3</span><strong> Affecter vos tâches</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                           adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        )
    }
}
