import React, { Component } from 'react'

export default class EditProject extends Component {
    render() {
        const {handleEditDetailFalse} = this.props
        return (
            <div className="form-edit">
                <div className="link-btn">
                    <h3 className="edit-title">Détails Projets</h3>
                    <Link className="btn-valid"><i class="fas fa-check"></i></Link>
                    <Link className="btn-close" onClick={handleEditDetailFalse}><i class="fas fa-times"></i></Link>
                </div>
                <div className="body-project">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        // value = {title}
                        // onChange = {handleChange}
                        required/>
                    <label htmlFor="title" className="label-name">Title</label>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="amount"
                        // value = {amount}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="amount" className="label-name" > Amount</label>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="start_date"
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
                        name="overall_date"
                        // value = {overall_date}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="overall_date" className="label-name" > Overall date</label>
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
                <div className="box-select box">
                        <select >
                            <option value = "statut"> Statut</option> 
                            <option value = "inprogress"> En cours</option> 
                            <option value = "finished"> Terminé</option> 
                            <option value = "waiting"> En attente</option> 
                        </select>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="id_customer"
                        // value = {id_customer}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="client" className="label-name" > Client</label>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="hourly_cost"
                        // value = {hourly_cost}
                        // onChange = {handleChange} 
                        required/>
                    <label htmlFor="hourly_cost" className="label-name" > Coût horaire</label>
                </div>
            </div>
       </div>
        )
    }
}