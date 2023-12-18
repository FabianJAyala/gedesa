import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/formulario.css";
import FormTemplate from "./formtemplate";
import imagen from "../images/formulario-imagen.jpg";

function Formulario() {
  return (
    <Container className="form-cont mt-5" fluid>
        <h2 align="center">CONTÁCTANOS</h2>
        <Row>
            <Col className="form-template-cont" md={6}>
                <FormTemplate />
            </Col>
            <Col md={6} className="imagen-cont">
                <img src={imagen} alt="contacto" className="form-image" />
            </Col>
        </Row>
    </Container>
  );
}

export default Formulario;