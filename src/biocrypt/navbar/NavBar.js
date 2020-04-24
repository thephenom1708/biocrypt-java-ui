import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BioCrypt</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#register">Register</Nav.Link>
                <Nav.Link href="#authenticate">Authenticate</Nav.Link>
            </Nav>
        </Navbar>
    );
}
