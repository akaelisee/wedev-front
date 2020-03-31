import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import { Link } from 'react-router-dom';
import ListCustomer from '../../Components/ListCustomer';

export class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showPopup : false
        }
        this.togglePopup = this.togglePopup.bind(this);
        this.closePopup  = this.closePopup.bind(this)
    }

    // state viewCustomer true
    togglePopup() {
        this.setState({
          showPopup : true
        })
      }
  
      // state  viewCustomer false
    closePopup() {
        this.setState({
            showPopup : false
        })
    }

    render() {
        return (
            <>
                <Dashboard />
                <div className="main">
                    <div className="customer">
                        <h1>Client</h1>
                        <Link to="/client/add"><i class="fas fa-plus-circle"></i> Ajouter un Client</Link>
                    </div>
                    <div className="list-customer">
                        <table>
                            <tr className="row">
                                <th className="cell">Nom</th>
                                <th>Prénoms</th>
                                <th>Adresse</th>
                                <th>Mail</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>Aka </td>
                                <td>Jean elisee</td>
                                <td>41 avenue de paris</td>
                                <td>example@ynov.com</td>
                                <td>
                                    <Link onClick = {this.togglePopup}> <i className="fas fa-eye"></i></Link>
                                    <Link to="/client/edit"> <i className="fas fa-pen"></i></Link>
                                    <Link to="" className="drop"> <i className="fas fa-trash-alt"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Aka </td>
                                <td>Jean elisee</td>
                                <td>41 avenue de paris</td>
                                <td>example@ynov.com</td>
                                <td>
                                    <Link onClick = {this.togglePopup}> <i className="fas fa-eye"></i></Link>
                                    <Link to="/client/edit"> <i className="fas fa-pen"></i></Link>
                                    <a href="" className="drop"> <i className="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            
                        </table>
                    </div>
                        {this.state.showPopup ? <ListCustomer popUp={this.closePopup}/>: null}
                </div>
            </>
        )
    }
}

export default Customer
