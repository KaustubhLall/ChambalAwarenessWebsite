import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class MainNav extends React.Component {

    constructor(props) {
        super(props);

        // hand down props to current state
        this.setState(props);
    }


    render() {
        const elem = (
            <Navbar bg="light" expand="lg" fixed={'top'}>
                <Navbar.Brand href={'/home'}>Chambal Committee Kota</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => this.redirectTo('/home')}>Home</Nav.Link>

                        <Nav.Link onClick={() => this.redirectTo('/members')}>Members</Nav.Link>

                        <Nav.Link onClick={() => this.redirectTo('/gallery')}>Gallery</Nav.Link>


                        <NavDropdown title="Chambal River" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">River Issues</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Solid Waste Management</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bio-Diversity Index</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Riverine Packages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Riverfront Packages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Competitions/Events</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => this.redirectTo('/contact')}>Contact Us</Nav.Link>
                        <Nav.Link onClick={() => this.redirectTo('/faq')}>FAQ</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

        return (elem);
    }

    redirectTo = (page) => {
        this.props.history.push(page)
    };
}

export default MainNav;