import React, { Component } from 'react'

export default class EditSprint extends Component {
        render() {
            const {handleEditDetailFalse} = this.props
            return (
                <div className="form-edit">
                    <div className="link-btn">
                        <h3 className="edit-title">Détails Sprint</h3>
                        <Link className="btn-valid"><i class="fas fa-check"></i></Link>
                        <Link className="btn-close" onClick={handleEditDetailFalse}><i class="fas fa-times"></i></Link>
                    </div>
                    <div className="body-project">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="title"
                            // value = {title}
                            // onChange = {handleChange} 
                            required/>
                        <label htmlFor="title" className="label-name" > Title</label>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="description"
                            // value = {description}
                            // onChange = {handleChange} 
                            required/>
                        <label htmlFor="description" className="label-name" > Descritpion</label>
                    </div>
                    <div className="box-select box">
                            <select >
                                <option value = "id_status"> Statut</option> 
                                <option value = "inprogress"> En cours</option> 
                                <option value = "finished"> Terminé</option> 
                                <option value = "waiting"> En attente</option> 
                            </select>
                    </div>
                    <div className="form-group">
                    <input 
                        type="text" 
                        name="end_date"
                        // value = {start_date}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="start_date" className="label-name" > Start date</label>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="end_date"
                        // value = {end_date}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="end_date" className="label-name" > End date</label>
                </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="completion_time"
                            // value = {completion_time}
                            // onChange = {handleChange} 
                            required/>
                        <label htmlFor="client" className="label-name" > Completion time</label>
                    </div>
                </div>
           </div>
            )
        }
    }