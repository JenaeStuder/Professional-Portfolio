import React, { Component } from "react";
import "./home.css";
// import {Container} from "semantic-ui-react";
import Bio from "../../Components/Bio";
import ProfilePicture from "../../Components/ProfilePicture";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// // import SideBar from "../../Components/SideBar";
// import { Grid } from 'semantic-ui-react';
// import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// import '../semantic/dist/semantic.min.css'
import { SideNav, SideNavItem, Button } from "react-materialize";
import Jenae from '../../Components/Jenae';





class Home extends Component {
    // 
    render() {
        
        return (
            <div>
                
                <Button data-target="sidenav_0" class="btn show-on-large sidenav-trigger">MORE</Button>
                <div style={{ position: 'absolute', width: '0px', height: '0px', visibility: 'hidden', display: 'none' }}>
                <ul id="sidenav_0" class="sidenav" style={{transform: "translateX(0%)"}}><li class="">
                    <div>
                        <SideNav trigger={<Button />} options={{ closeOnClick: true }}>
                            <SideNavItem userView user={{
                                background: 'https://placeimg.com/640/480/tech',
                                image: 'static/media/react-materialize-logo.824c6ea3.svg',
                                name: 'John Doe',

                            }} />
                            <SideNavItem href="#!icon" icon="cloud">
                                First Link With Icon
                            </SideNavItem>
                            <SideNavItem href="#!second">
                                Second Link
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                                Subheader
                            </SideNavItem>
                            <SideNavItem waves href="#!third">
                                Third Link With Waves
                            </SideNavItem>
                        </SideNav>
                    </div>
                    </li></ul>
                </div>
                <main>
                <Jenae/>
                    <br />
                    <Row>
                    <Col xs={1}></Col>
                        <Col xs={10} md={12}>
                        <Row>
                        <Col xs={12} md={4}>
                            <ProfilePicture />
                        </Col>
                        <Col xs={12} md={5}>
                            <Bio />
                        </Col>
                        <Col xs={0} md={2}></Col>
                        </Row>
                        </Col>
                        <Col xs={1}></Col>

                    </Row>
                </main>
                {/* </Container> */}
              
                </div>
          
        )
    }
}


export default Home;