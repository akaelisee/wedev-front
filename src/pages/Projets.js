import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Projets extends Component {
    render() {
        return (
            <div className="Projets">
               <ul className="side-nav-menu scrollable">
                    <li className="nav-item active">
                        <link to ="/" className="mrg-top-30">
                                <span className="icon-holder">
                                    <i className="ti-home"></i>
                                </span>
                                <span className="title">Projets</span>
                        </link>
                    </li>
                </ul>
                <li className="nav-item dropdown">
                            <Link to="javascript:void(0);" className="dropdown-toggle">
                                <span className="icon-holder">
										<i className="ti-package"></i>
									</span>
                                <span className="title">Apps</span>
                                <span className="arrow">
										<i className="ti-angle-right"></i>
								</span>
                            </Link>
                            
                </li>
                
            </div>
        )
    }
}
