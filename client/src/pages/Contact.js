import React, { Component } from "react";
import "./Contact.css";
import { TextInput, Textarea } from 'react-materialize';
import { SideNav, SideNavItem } from 'react-materialize';
import { Button, Footer , Card } from 'react-materialize';
import { Col, Row, Container } from 'react-bootstrap';
import Jenae from '../Components/Jenae';



class Contact extends Component {
    render() {
        constructor(props) {
            super(props);
            this.state = {
              name: '',
              email: '',
              message: '',
            }
          }
          handleFormSubmit( event ) {
            event.preventDefault();
            console.log(this.state);
          }
        return (
            <div>
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
                        <SideNavItem waves href="/">
                            Home
                       </SideNavItem>
                        <SideNavItem waves href="#!third">
                            Projects
                        </SideNavItem>
                    </SideNav>
                </div>
                <Container>
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
                    <p>Let's get in touch!!</p>
                    <form action="/action_page.php">
                        <TextInput label="Name" id='name' />
                        <TextInput email validate label="Email" id='email' />
                        <Textarea placeholder="What are you looking for?" id='message'/>
                    
                    
                    <Button className='CardBtn' type='submit' name='submit' value= 'Submit'> Send it to me</Button>
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
                    <h5 className="white-text">
                        All the pretty things you see were created with Reactjs, React-Materialize and React-Bootstrap.
                    </h5>
                    {/* <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
        </p> */}
                </Footer>
            </div>
        )
    }

};
export default Contact;