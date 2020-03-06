import React, { Component } from 'react'

export default class Addtask extends Component {
    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="summary" value="" placeholder="Project Task summary" onChange=""/>
                                    {
                                        <div className="invalid-feedback"></div>
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value="" onChange="">
                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <select 
                                        className="form-control form-control-lg" name="status" value="" onChange="">
                                        <option value="">Choisir le statut</option>
                                        <option value="TO_DO">A faire</option>
                                        <option value="IN_PROGRESS">En cours</option>
                                        <option value="DONE">Terminé</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
