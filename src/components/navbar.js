import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css'
import logo from "../images/logo-gedesa.png";
import Headroom from 'react-headroom';

const navbar = () => {

    return (
        <Headroom>
            <Navbar expand="lg" variant="light" className="navbar-header">
                <Container>
                    <Navbar.Brand><Link to=""><img src={logo} height={75} alt="logo gedesa"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="opciones-nav justify-content-center flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="acercade">Acerca De</Nav.Link>
                            <Nav.Link as={Link} to="https://shop.gedesa.com/">Odontología</Nav.Link>
                            <Nav.Link as={Link} to="https://medica.gedesa.com/">Medica</Nav.Link>
                            <Nav.Link as={Link} to="https://mi-salud.com/">Mi Salud</Nav.Link>
                            <Nav.Link as={Link} to="https://topservice.com.bo/">Servicio Técnico</Nav.Link>
                        </Nav>
                        <div className="contacto-div">
                            <Link to="contacto"><Button id="contact-btn" variant="danger">Contáctenos</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Headroom>
  );
};

export default navbar;
