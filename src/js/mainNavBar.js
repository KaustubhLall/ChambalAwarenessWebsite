import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {HashLink as Link} from 'react-router-hash-link';

class MainNav extends React.Component {


    render() {
        const elem = (
            <Navbar bg="light" expand="lg" fixed={'top'}>
                <Navbar.Brand href={'/home'}>Chambal Charcha Kota</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={'home#gallery'}><Nav.Link>Home</Nav.Link> </Link>
                        <Link to={'home#members'}><Nav.Link>Members</Nav.Link></Link>
                        <Link to={'home#gallery'}><Nav.Link>Gallery</Nav.Link></Link>


                        <NavDropdown title="Chambal River" id="basic-nav-dropdown">
                            <Link to={'home#issues'}><NavDropdown.Item href="#action/3.1">River Issues</NavDropdown.Item></Link>
                            <Link to={'home#management'}><NavDropdown.Item href="#action/3.2">Solid Waste Management</NavDropdown.Item></Link>
                            <Link to={'home#biodiversity'}><NavDropdown.Item href="#action/3.3">Bio-Diversity Index</NavDropdown.Item></Link>
                            <Link to={'home#mswm'}><NavDropdown.Item href="#action/3.3">MSWM Condunrum</NavDropdown.Item></Link>
                            <Link to={'home#packages'}><NavDropdown.Item href="#action/3.4">Tour Packages</NavDropdown.Item></Link>
                            <Link to={'home#sep'}><NavDropdown.Item href="#action/3.5">Riverfront Packages</NavDropdown.Item></Link>
                            <Link to={'home#awards'}><NavDropdown.Item href="#action/3.6">Competitions and Events</NavDropdown.Item></Link>
                            <Link to={'home#heritage'}><NavDropdown.Item href="#action/3.7">SMART Heritage</NavDropdown.Item></Link>
                            <Link to={'home#csr'}><NavDropdown.Item href="#action/3.8">CSR Pitch Decking</NavDropdown.Item></Link>
                        </NavDropdown>

                        <Link to={'home#'}><Nav.Link onClick={() => this.redirectTo('/contact')}>Contact Us</Nav.Link></Link>
                        <Link to={'home#'}><Nav.Link onClick={() => this.redirectTo('/faq')}>FAQ</Nav.Link></Link>


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