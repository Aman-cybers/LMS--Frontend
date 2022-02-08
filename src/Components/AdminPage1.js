import { Component } from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Admin.css'


export default class AdminPage1 extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand ><h2 className='n-brand'>Learning Management System</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className="n-b">
                                    <Link to='/StudentSignup'><Button variant="outline-primary">Add Student</Button></Link>
                                    <Link to='/FacultySignup'><Button variant="outline-primary">Add Faculty</Button></Link>
                                    <Button variant="outline-primary">Add Course</Button> </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>
        )
    }
}