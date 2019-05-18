import React, { Component } from 'react';
// import {Container} from "semantic-ui-react";
// import Container from "react-bootstrap/Container";
import {Row, Col} from 'react-bootstrap'
import "./style.css"

export default class Bio extends Component {
    
    render(){
        return(
            <div id="color" >
                    <br/>
                    <Row className= 'Qualifications'>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                    <h2 className='Title'>Full Stack Developer</h2>
                    </Col>
                    <Col xs={1}></Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col md={4}>
                    <ul>
                        <li>Reactjs</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Node.js</li>
                        <li>MYSQL</li>
                        <li>Sequelize</li>
                        <li>Mongo</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                        <li>FireBase</li>
                    </ul>
                    </Col>
                    <Col md={8}>
                    <ul>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                        <li>React-Materialize</li>
                        <li>Semantic-UI-React</li>
                        <li>SASS</li>
                        <li>HTML</li>
                        <li>RESTful API</li>
                        <li>Github</li>
                        <li>Heroku</li>
                        </ul>
                        </Col>
                    </Row>
                    </Row>
            </div>
        )}
    };