import React, { Component } from 'react'

export default class ListTask extends Component {
    constructor(props){
        super(props)
        this.state={
            data:tasks,
            title:"",
            description:"",
            id_status:"",
            completion_time:"",
        };
    }
       
}