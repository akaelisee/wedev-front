import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
// import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Sidebar />
            </div>
        )
    }
}

export default Dashboard
