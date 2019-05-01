import React, { Component } from 'react';
// import {Container} from "semantic-ui-react";
// import Container from "react-bootstrap/Container";
import {Container, Row, Col} from 'react-bootstrap'
import "./style.css"

export default class Bio extends Component {
    
    render(){
        return(
            <div id="color" >
                
                <Container>
                    <br/>
                    <Row className= 'Qualifications'>
                    <h3 className='Title'>Full Stack Developer</h3>
                    <Row>
                        <Col xs={4}>
                    <ul>
                        <li>JavaScript</li>
                        <li>Reactjs</li>
                        <li>Node.js</li>
                        <li>MYSQL</li>
                        <li>Sequelize</li>
                        <li>Mongo</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                    </ul>
                    </Col>
                    <Col xs={8}>
                    <ul>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                        <li>React-Materialize</li>
                        <li>Semantic-UI-React</li>
                        <li>SASS</li>
                        <li>HTML</li>
                        <li>Github</li>
                        </ul>
                        </Col>
                    </Row>
                    </Row>
                    </Container>
                    

              
            </div>
        )}
    };