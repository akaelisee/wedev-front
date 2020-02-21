import React , { Component } from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import ContainerBody from '../layout/ContainerBody'

export class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <ContainerBody />
                <Footer />
            </div>
        )
    }
}

export default Home;