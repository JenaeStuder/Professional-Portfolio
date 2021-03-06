import React, { Component } from "react";
import "./Projects.css";
import { SideNav, SideNavItem, Button, Footer } from 'react-materialize';
import { Col, Row, Container } from 'react-bootstrap';
import Jenae from '../Components/Jenae';


class Projects extends Component {

    render() {

        return (
            <div>
                <div>


                    <SideNav trigger={<Button waves data-target="sidenav_0" class="btn show-on-large sidenav-trigger">MORE</Button>} options={{ closeOnClick: true, visibility: true }} id="sidenav_0" class="sidenav" style={{ transform: "translateX(-100%)", visibility: 'visible' }}>

                        <SideNavItem userView user={{
                            background:
                                'https://placeimg.com/640/480/tech',
                            name: 'Jenae Studer-Hart',

                        }} />
                        <SideNavItem waves href="/">
                            Home
                       </SideNavItem>
                        <SideNavItem waves href="https://jenaestuder.com/#/Contact">
                            Contact
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem subheader>
                            Check Me Out On
                       </SideNavItem>
                        <SideNavItem waves href="https://www.linkedin.com/in/jenae-studer-a8a7029a/">
                            LinkedIn
                         </SideNavItem>
                        <SideNavItem waves href="https://github.com/naeNae15232">
                            Github
                        </SideNavItem>


                    </SideNav>
                </div>
                <Container className='Container'>
                    <Row id='Name'>
                        <Col xs={2} md={2}></Col>
                        <Col xs={8} md={8}>
                            <Jenae />
                        </Col>
                        <Col xs={2} md={2}></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <h3 className='Text'>Have a quick peek at a few of my MERN stack creations.</h3>
                        </Col>
                        <Col xs={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} id="Columns" >
                            <a className='Links' id='Portfolios' href='https://jenaestuder.com'>My Portfolio</a>
                            <br />
                            <Row Classname='description'>
                                <Col xs={12}>
                                    <p className='Lists'>My personal portfolio that you are currently viewing. It was built for fun to showcase my abilites as a full stack developer.</p>
                                </Col> 
                            </Row>
                            <Row className="space">
                                <Col xs={1}></Col>
                                <Col xs={12}>
                                    <p className='Heading'>Created Using:</p>
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={12}>
                                    <ul className="Lists">
                                        <li>React</li>
                                        <li>React-Materialize</li>
                                        <li>React-Bootstrap</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                    </ul>
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} id="Columns" >
                            <a className="Links" id='Vans' href="https://ancient-escarpment-24807.herokuapp.com/">Van's Memory Game</a>
                            <br></br>
                            <Row Classname='description'>
                                <Col xs={12}>
                                    <p className='Lists'>An interactive memory game created to show elevation of state in ReactJS. Inspiration came from my favorite shoe brand.</p>
                                </Col> 
                            </Row>
                            <Row className="space">
                                <Col xs={1}></Col>
                                <Col xs={12}>
                                    <p className='Heading'>Created Using:</p>
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={12}>
                                    <ul className="Lists">
                                        <li>React</li>
                                        <li>React-Bootstrap</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} id="Columns">
                            <a className="Links" id='OffThe' href='https://off-the-beaten-path.herokuapp.com/' >Off the Beaten Path</a>
                            <br></br>
                            <Row Classname='description'>
                                <Col xs={12}>
                                    <p className='Lists'>A full stack application built with the Create and Update functions of CRUD. It's an application that helps you find your perfect obscure vacation destination.</p>
                                </Col> 
                            </Row>
                            <Row className="space">
                                {/* <Col xs={1}></Col> */}
                                <Col xs={12}>
                                    <p className='Heading'>Created Using:</p>
                                </Col>
                                {/* <Col xs={1}></Col> */}
                            </Row>
                            <Row>
                                {/* <Col xs={1}></Col> */}
                                <Col xs={12}>
                                    <ul className="Lists">
                                        <li>MYSQL</li>
                                        <li>Sequelize</li>
                                        <li> JavaScript</li>
                                        <li> jQuery</li>
                                        <li> Node.js</li>
                                        <li> Express</li>
                                        <li> HTML</li>
                                        <li> CSS</li>
                                        <li> Bootstrap</li>
                                        <li>Backstretch</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col xs={12} md={4} id="Columns">
                            <a className="Links" id='GOT' href='https://groodymoloko.github.io/gameofthrones/'> Game of Thrones Portal</a>
                            <br></br>
                            <Row Classname='description'>
                                <Col xs={12}>
                                    <p className='Lists'>An entirely front end application that calls on multiple GOT API's to reference information on your favorite GOT characters and houses.</p>
                                </Col> 
                            </Row>
                            <Row className="space">
                                <Col xs={12}>
                                    <p className='Heading'>Created Using:</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10}>
                                    <ul className="Lists">
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>RESTful API</li>
                                        <li>Backstretch</li>
                                        <li>Firebase</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} id="Columns">
                            <a className="Links" id='intern' href='https://naenae15232.github.io/melt-internship/'> meltmedia Test</a>
                            <br></br>
                            <Row Classname='description'>
                                <Col xs={12}>
                                    <p className='Lists'>A fully responsive website built to showcase my abilities as a Front End Dev for meltmedia. I had to recreate a PDF and add my own creativity where applicable.</p>
                                </Col> 
                            </Row>
                            <Row className="space">
                                <Col xs={12}>
                                    <p className='Heading'>Created Using:</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10}>
                                    <ul className="Lists">
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>iFrames</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                        
            <Row className="End">
                <Col xs={1}></Col>
                <Col xs={10}>
                    <h3 className='Text'>For a complete and always updated list please check out my
                        <a className='Texts' href='https://github.com/naeNae15232?tab=repositories' alt='github link'> Github.</a></h3>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <br />
                </Container >

            <Footer
                copyrights="copy 2019 Jenae Studer-Hart"
                moreLinks={<a />}
                links={<ul />}
                className="Footer"
            >
                {/* <h5 className="white-text">
                    Created in Reactjs
</h5> */}
                <p className="grey-text text-lighten-4">

                </p>
            </Footer>
            </div >
        )
    }
};

export default Projects;