import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class Footer extends React.Component{
    render(){
        return(
            <div className="container">
                <Navbar className="fixed-bottom footer-color" expand="lg">
                    <Nav className="mr-auto">
                        <h6>Footer</h6>
                    </Nav>
                </Navbar>             
            </div>
        );
    }
}

export default Footer