import React , { Component, Fragment } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContainerBody from '../layout/ContainerBody'

export class Home extends Component {
        

    functionHide() {
        document.querySelector('.login').style.display = "none";
        document.querySelector('.login').style.position = "relative";
    }
    render(){
        return(
            <Fragment>
                <Header />
                <ContainerBody />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;