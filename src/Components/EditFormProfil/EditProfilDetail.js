import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class EditProfilDetail extends Component {
    render() {
        const {handleEditDetailFalse} = this.props
        return (
            <form>
                <div className="form-edit">
                    <div className="link-btn">
                        <h3 className="edit-title">Détails professionnels</h3>
                        <Link className="btn-valid"><i class="fas fa-check"></i></Link>
                        <Link className="btn-close" onClick={handleEditDetailFalse}><i class="fas fa-times"></i></Link>
                    </div>
                    <div className="form-select">
                        <div className="box-select box">
                            <select >
                                <option value = "back"> Votre profil</option> 
                                <option value = "back"> Développeur Back</option> 
                                <option value = "front"> Développeur Front</option> 
                                <option value = "data"> Big data</option> 
                                <option value = "analyst"> Analyst</option> 
                                <option value = "qa"> QA</option> 
                            </select>
                        </div>
                        <div className="box-select">
                            <select>
                                <option value = "SAS"> Status Société </option> 
                                <option value = "SAS"> SAS</option> 
                                <option value = "SASU"> SASU</option> 
                                <option value = "Auto-entrepreneur"> Auto-entrepreneur</option> 
                                <option value = "EURL"> EURL</option> 
                                <option value = "SARL"> SARL</option> 
                            </select>
                        </div>
                    </div>
                    <div className="body-inscris">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="compagny"
                            // value = {compagny}
                            // onChange = {handleChange}
                            required/>
                        <label htmlFor="compagny" className="label-name">Société</label>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name"
                            // value = {siret}
                            // onChange = {handleChange} 
                            required/>
                        <label htmlFor="siret" className="label-name" > Siret</label>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}

export default EditProfilDetail;
