import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props){
        super(props)
        this.state={
            data:sprints,
            title:"",
            description:"",
            id_status:"",
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
                       <label htmlFor="id_status">Status</label>
                       <input type="text" name="id_status" value={id_status}
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