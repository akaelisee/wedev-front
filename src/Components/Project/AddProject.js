import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export default class AddProject extends Component {
    constructor(props){
        super(props)
        this.state={
            data:projects,
            title: "",
            amount:"",
            start_date:"",
            end_date:"",
            overall_date:"",
            id_status:"",
            id_customer:"",
            hourly_cost:"",
        };
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
               <ProjectList projects={this.state.data}/>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="title">Titre</label>
                       <input type="text" name="title" value={title}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="amount">Quantité</label>
                       <input type="text" name="amount" value={amount}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="start_date">Date de début</label>
                       <input type="text" name="start_date" value={start_date}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="end_date">Date de fin</label>
                       <input type="text" name="end_date" value={end_date}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="overall_date">Date globale</label>
                       <input type="text" name="overall_date" value={overall_date}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="id_status">id_status</label>
                       <input type="text" name="id_status" value={id_status}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="id_customer">id_customer</label>
                       <input type="text" name="id_customer" value={id_customer}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="hourly_cost">hourly_cost</label>
                       <input type="text" name="hourly_cost" value={hourly_cost}
            onChange = {this.handleChange}/>
                   </div>
                   <button>Send data!</button>
               </form >
            </div>
        )
    }
}
