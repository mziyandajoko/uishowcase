import {React ,useState} from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'

function NavigationBar(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Protea.tv</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
</Navbar>
        
        </>
    )
}

export default NavigationBar;