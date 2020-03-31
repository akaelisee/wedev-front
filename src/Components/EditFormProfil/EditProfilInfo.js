import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class EditProfilInfo extends Component {

    render() {
        const {handleEditInfoFalse} = this.props
        return (
            <form>
                 <div className="form-edit">
                     <div className="link-btn">
                        <h3 className="edit-title">Vos infos personnelles</h3>
                        <Link className="btn-valid"><i className="fas fa-check"></i></Link>
                        <Link className="btn-close" onClick={handleEditInfoFalse} ><i className="fas fa-times"></i></Link>
                     </div>
                     {/* Formulaire */}
                     <div className="body-inscris">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname"
                                required/>
                            <label htmlFor="firstname" className="label-name">Nom</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                required/>
                            <label htmlFor="name" className="label-name" > Prénom</label>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                name="compagny" 
                                required/>
                            <label htmlFor="mail" className="label-name" > Email</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="phone"
                                required/>
                            <label htmlFor="name"  className="label-name" >Télephone</label>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditProfilInfo
