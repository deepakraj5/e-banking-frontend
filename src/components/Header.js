import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <Navbar bg="transparent" expand="lg">
                    <Link to="/" className="navbar-brand font-weight-bold">City Bank</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/" className="nav-link h6" activeClassName="text-primary" exact={true}>Home</NavLink>
                            <NavLink to="/about" className="nav-link h6" activeClassName="text-primary">About</NavLink>
                            {/* <NavLink to="/careers" className="nav-link h6" activeClassName="text-primary">Careers</NavLink> */}
                            {/* <NavLink to="/contact" className="nav-link h6" activeClassName="text-primary">Cotact Us</NavLink> */}
                            {/* <NavLink to="/loan" className="nav-link h6" activeClassName="text-primary">Loan</NavLink> */}
                            <NavLink to="/products" className="nav-link h6" activeClassName="text-primary">Products</NavLink>
                            {/* <NavDropdown className="h6" title="Services" id="basic-nav-dropdown">
                                <NavLink to="/service1" className="dropdown-item" activeClassName="bg-info" exact={true}>Service 1</NavLink>
                                <NavLink to="/service2" className="dropdown-item " activeClassName="bg-info">Service 2</NavLink>
                                <NavLink to="/profile" className="dropdown-item " activeClassName="bg-info">Profile</NavLink>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header