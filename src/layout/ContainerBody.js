import React, { Component } from 'react'
import DevBody from '../Components/DevBody.js';
import ProjectBody from '../Components/ProjectBody.js';
import FinalBody from '../Components/FinalBody.js';

export default class ContainerBody extends Component {
    render() {
        return (
            <>
                <DevBody />
                <ProjectBody />
                <FinalBody />
            </>
        )
    }
}
