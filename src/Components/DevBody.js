import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import icon1 from '../assets/svg/icon1.svg'
import icon2 from '../assets/svg/icon2.svg'
import icon3 from '../assets/svg/icon3.svg'
import icon4 from '../assets/svg/icon4.svg'

export default class DevBody extends Component {
    render() {
        return (
            <div className = "dev">
                <div className = "body-dev">
                    <div className = "dev-card">
                        <div className = "button-dev">
                            <Link to ="/" className="button-lien"> Voici WeDev </Link>
                        </div>
                        <div className = "title-dev">
                            <p> APPLICATION DE GESTION</p>
                            <p> DE PROJET POUR LES DEV</p>
                        </div>
                        <div className ="text-dev">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error commodi nostrum veniam. Explicabo minima id illum reprehenderit ipsam autem aspernatur natus officiis sit error, voluptatibus hic ab qui atque.</p>
                        </div>
                    </div>
                    <div className = "dev__item">
                        <div className ="flex__item">
                            <img src = { icon1 }  alt =" icon1"/>
                            <p>Vos reporting centralisés</p>
                        </div>
                        <div className ="flex__item">
                            <img src = { icon2 }  alt =" icon2"/>
                            <p>Le suivi de vos activité en temps réel</p>
                        </div>
                        <div className ="flex__item">
                            <img src = { icon3 }  alt =" icon3"/>
                            <p>Un gain de temps pour le pilotage</p>
                        </div>
                        <div className ="flex__item">
                            <img src = { icon4 }  alt =" icon4"/>
                            <p className = "paragraphe">Des utilitaires pour votre dev</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
