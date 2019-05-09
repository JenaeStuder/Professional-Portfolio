import React, { Component } from "react";
import "./Home.css";
// import {Container} from "semantic-ui-react";
import Bio from "../Components/Bio";
import ProfilePicture from "../Components/ProfilePicture";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// // import SideBar from "../../Components/SideBar";
// import { Grid } from 'semantic-ui-react';
// import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// import '../semantic/dist/semantic.min.css'
import { SideNav, SideNavItem } from 'react-materialize';
import { Button, Footer } from 'react-materialize';
// import SideNav from "../../Components/SideNav";
// import SideNavItem from "../../Components/SideNavItem";
import Jenae from '../Components/Jenae';
import About from '../Components/About';







class Home extends Component {

    render() {

        return (
            <div>

                {/* <Button/>
                 <Button waves data-target="sidenav_0" class="btn show-on-large sidenav-trigger">MORE</Button>
                <div style={{ position: 'absolute', width: '0px', height: '0px',transform: "translateX(150%)"  }}>
         <ul trigger={<Button/>} id="sidenav_0" class="sidenav" style={{transform: "translateX(0%)", visibility: 'visible'}}><li class="">  */}
                <div>


                    <SideNav trigger={<Button waves data-target="sidenav_0" class="btn show-on-large sidenav-trigger">MORE</Button>} options={{ closeOnClick: true, visibility: true }} id="sidenav_0" class="sidenav" style={{ transform: "translateX(-100%)", visibility: 'visible' }}>

                        <SideNavItem userView user={{
                            background: 'https://placeimg.com/640/480/tech',
                            // image: 'static/media/react-materialize-logo.824c6ea3.svg',
                            name: 'Jenae Studer-Hart',

                        }} />
                        <SideNavItem waves href="https://www.linkedin.com/in/jenae-hart-a8a7029a/">
                            LinkedIn
                            </SideNavItem>
                        <SideNavItem waves href="https://github.com/naeNae15232">
                            Github
                            </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem subheader>
                            Subheader
                            </SideNavItem>
                        <SideNavItem waves href="/Contact">
                            Contact
                            </SideNavItem>
                        <SideNavItem waves href="#!third">
                            Projects
                            </SideNavItem>
                    </SideNav>

                </div>
                {/* </li></ul>  
                 </div>  */}

                <Container>
                    <Row id='Name'>
                        <Col xs={2} md={2}></Col>
                        <Col xs={8} md={8}>
                            <Jenae />
                        </Col>
                        <Col xs={2} md={2}></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10} md={12}>
                            <Row id='Info'>
                                {/* <Col md={2}></Col> */}
                                <Col xs={12} md={5}>
                                    <ProfilePicture />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Bio />
                                </Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={10} md={12}>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={10}>
                                    <About />
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                        </Col>
                        <Col xs={0} md={1}></Col>
                    </Row>
                </Container>
                <Footer
                    copyrights="copy 2019 Jenae Studer-Hart"
                    moreLinks={<a />}
                    links={<ul />}
                    className="Footer"
                >
                    <h5 className="white-text">
                    Created in Reactjs
</h5>
                    <p className="grey-text text-lighten-4">
                   
</p>
                </Footer>

            </div>

        )
    }

};



export default Home;