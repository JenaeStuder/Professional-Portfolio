import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import "./style.css"

export default class About extends Component {
    
    render(){
        return(
            <div className='Facts'>
            <br/>
            <Row>  
                <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
                <h2 className='Title'>Fun Facts</h2>
                </Col>
                <Col xs={1}></Col>
                </Row>
                <p>
                    <Row>
                        <Col md={4}>
                    <ul>
                        <li>Self Starter</li>
                        <li>Organized</li>
                        <li>Driven</li>
                        <li> Motivated</li>
                    </ul>
                    </Col>
                    <Col md={4}>
                    <ul>
                        <li>Fast Learner</li>
                        <li>Adaptable</li>
                        <li>Amazing at Googling</li>
                        
                    </ul>
                    </Col>
                    <Col md={4}>
                    <ul>
                    <li>Loves Music</li>
                    <li>Loves Musicals</li>
                    <li>Loves Reading</li>
                        
                    </ul>
                    </Col>
                    </Row>
                   
                </p>
                </Row>
            </div>
        )
    }
};