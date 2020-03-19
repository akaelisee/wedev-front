import React, { Component } from 'react'

export default class ListSprint extends Component {
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
       
}