import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from "../images/logo-gedesa.png";

function Footer() {

  return (
    <Container className="footer-cont" align="center" fluid>
        <Row className="links-cont">
            <Col lg={3} md={6} xs={6} className="mb-3">
                <Link to=""><img src={logo} height={75} alt="logo gedesa"/></Link>
            </Col>
            <Col lg={3} md={6} xs={6}>
                <ul>
                    <a href="https://shop.gedesa.com/"><li>ODONTOLOGÍA</li></a>
                    <a href="https://medica.gedesa.com/"><li>MÉDICA</li></a>
                    <a href="https://mi-salud.com/"><li>MI SALUD</li></a>
                    <a href="https://topservice.com.bo/"><li>SERVICIO TÉCNICO</li></a>
                </ul>
            </Col>
            <Col lg={3} md={6} xs={6}>
                <ul>
                    <Link to="acercade"><li>ACERCA DE</li></Link>
                    <Link to="contacto"><li>CONTACTO</li></Link>
                    <li>SUCURSALES FÍSICAS</li>
                </ul>
            </Col>
            <Col lg={3} md={6} xs={6}>
                <ul>
                    <Link to="contacto"><li><strong>CONTACTO</strong></li></Link>
                    <a href="https://wa.me/77750954"><li><FontAwesomeIcon icon={faPhone} size="xs" style={{ color: "#000000", marginRight: "5px" }} />Atención al Cliente: 77750954</li></a>
                    <a href="mailto:ventas@gedesa.com"><li><FontAwesomeIcon icon={faEnvelope} size="xs" style={{ color: "#000000", marginRight: "5px" }} />ventas@gedesa.com</li></a>
                </ul>
            </Col>
        </Row>
        <Row className="copyright-row">
            <p>&#169; 2023 Gedesa Ltda. </p>
        </Row>
    </Container>
  );
}

export default Footer;