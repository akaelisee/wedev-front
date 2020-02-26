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
                            <p>inscrivez-vous et recevez prochainement</p>
                            <p>un accès premium à l'application WeAreData</p>
                        </div>
                        <div className="button-final">
                            <Link to ="/" className="lien"> JE M'INSCRIS </Link>
                        </div>
                    </div>
                </div>
        )
    }
}
