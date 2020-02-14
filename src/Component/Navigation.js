import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">POSTS Web Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
        
                <Nav.Link href="/login">Login</Nav.Link>
                
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
