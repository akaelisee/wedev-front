import React, { Component } from 'react'

export default class Deletetask extends Component {
    render() {
        return (
            <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: 
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title"></h5>
                        <p className="card-text text-truncate ">
                          
                        </p>
                        <Link to="/" className="btn btn-primary">
                            View / Update
                        </Link>
                        <button className="btn btn-danger ml-4" onClick= "">
                            Delete
                        </button>
                    </div>
            </div>
        )
    }
}
