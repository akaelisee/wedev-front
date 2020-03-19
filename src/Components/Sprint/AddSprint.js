import React, { Component } from 'react'

export default class AddSprint extends Component {
    constructor(props){
        super(props)
        this.state={
            data:sprints,
            title:"",
            description:"",
            id_status:"",
            start_date:"",
            end_date:"",
            completion_time:"",
        };
    }
    
    //handleChange=(event)=>{
      //  this.setState({
        //    [event.target.name]:event.target.value
        //})
        //console.log(this.state);
    //}
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
                       <label htmlFor="description">Description </label>
                       <input type="text" name="description" value={description}
            onChange = {this.handleChange}/>
                   </div> 
                   <div className="form-group">
                       <label htmlFor="id_status">id_status</label>
                       <input type="text" name="id_status" value={id_status}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="start_date">Start date</label>
                       <input type="text" name="start_date" value={start_date}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="end_date">End date</label>
                       <input type="text" name="end_date" value={start_date}
            onChange = {this.handleChange}/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="completion_time">Completion time</label>
                       <input type="text" name="completion_time" value={completion_time}
            onChange = {this.handleChange}/>
                   </div>
                   <button>Send data!</button>
               </form >
            </div>
        )
    }
}