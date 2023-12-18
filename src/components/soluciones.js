import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/soluciones.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Soluciones() {

  return (
    <Container className="soluciones-background" fluid>
        <Row>
            <Col className="soluciones-bullets">
                <h1>Soluciones Múltiples</h1>
                <p style={{marginTop: "20px"}}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Odontólogo Profesional</p>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Médico Profesional</p>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Cuidado del Hogar</p>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Soporte Técnico</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Soluciones;