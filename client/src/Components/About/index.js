import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "./style.css"

export default class About extends Component {
    
    render(){
        return(
            <div className='Facts'>
                <h2>Fun Facts</h2>
                <p>
                    <Row>
                        <Col xs={4}>
                    <ul>
                        <li>Self Starter</li>
                        <li>Organized</li>
                        <li>Driven</li>
                    </ul>
                    </Col>
                    <Col xs={4}>
                    <ul>
                        <li> Motivated</li>
                        <li>Fast Learner</li>
                        <li>Easily Adaptable</li>
                    </ul>
                    </Col>
                    <Col xs={4}>
                    <ul>
                        <li>Strong Google skills</li>
                        <li>Unafraid to ask questions</li>
                    </ul>
                    </Col>
                    </Row>
                </p>
            </div>
        )
    }
};