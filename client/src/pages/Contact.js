import React, { Component } from "react";
import "./Contact.css";
import { TextInput, Textarea } from 'react-materialize';
import { SideNav, SideNavItem } from 'react-materialize';
import { Button, Footer, Card } from 'react-materialize';
import { Col, Row, Container } from 'react-bootstrap';
import Jenae from '../Components/Jenae';
import axios from 'axios';


const API_PATH = 'https://localhost:3000/react-contact-form/api/index.php';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
    }
    handleFormSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <div>


                    <SideNav trigger={<Button waves data-target="sidenav_0" class="btn show-on-large sidenav-trigger">MORE</Button>} options={{ closeOnClick: true, visibility: true }} id="sidenav_0" class="sidenav" style={{ transform: "translateX(-100%)", visibility: 'visible' }}>

                        <SideNavItem userView user={{
                            background: 'https://placeimg.com/640/480/tech',
                            // image: 'static/media/react-materialize-logo.824c6ea3.svg',
                            name: 'Jenae Studer-Hart',

                        }} />
                        <SideNavItem waves href="/">
                            Home
                       </SideNavItem>
                        <SideNavItem waves href="https://jenaestuder.com/#/Projects">
                            Projects
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
                            <Card className='Card'>
                            <Row>
                            <Col xs={3}></Col>
                            <Col xs={6}>
                                <p id='hey'>Let's get in touch!!</p>
                                </Col>
                                <Col xs={3}></Col>
                                </Row>
                                <form action="/action_page.php">
                                    <TextInput label="Name" id='name' value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value })} />
                                    <TextInput email validate label="Email" id='email' value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                    <Textarea placeholder="What are you looking for?" id='message' value={this.state.message}
                                        onChange={e => this.setState({ message: e.target.value })} />


                                    <Button className='CardBtn' type='submit' name='submit' value='Submit'> Send it to me</Button>
                                    <div>
                                        {this.state.mailSent &&
                                            <div>Thank you for contcting us.</div>
                                        }
                                    </div>
                                </form>

                            </Card>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>

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
                    {/* <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
        </p> */}
                </Footer>
            </div>
        )
    }

};
export default Contact;