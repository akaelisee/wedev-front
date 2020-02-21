import React, { Component } from 'react'

export default class DevBody extends Component {
    render() {
        return (
            <div className = "dev">
                <div className = "">
                    <div className = "button-dev">
                        <button> Voici WeDev </button>
                    </div>
                    <div className = "title-dev">
                        <p> APPLICATION DE GESTION</p>
                        <p> DE PROEJET POUR LES DEV</p>
                    </div>
                    <div className ="text-dev">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error commodi nostrum veniam. Explicabo minima id illum reprehenderit ipsam autem aspernatur natus officiis sit error, voluptatibus hic ab qui atque.</p>
                    </div>
                </div>
                <div className = "dev__item">
                    <div>
                        <i></i>
                        <p>Vos reporting centralisés</p>
                    </div>
                    <div>
                        <i></i>
                        <p>Le service de nous activité en temps réel</p>
                    </div>
                    <div>
                        <i></i> 
                        <p>Un gain de temps pour le pilotage</p>
                    </div>
                    <div>
                        <i></i>
                        <p>Des utilitaires pour votre dev</p>
                    </div>
                </div>
            </div>
        )
    }
}
