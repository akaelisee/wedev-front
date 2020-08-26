import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FinalBody extends Component {
    render() {
        return (
                <div className="final">
                    <div className="card-final">
                        <div className="title-final">
                            <label>OFFRE DE LANCEMENT</label>
                        </div>
                        <div className="text-final">
                            <p>inscrivez-vous et recevez prochainement <br /> un accès premium à l'application WeAreData </p>
                            {/* <p></p> */}
                        </div>
                        <div className="button-final">
                            <Link to ="/inscription" className="lien"> JE M'INSCRIS </Link>
                        </div>
                    </div>
                </div>
        )
    }
}
