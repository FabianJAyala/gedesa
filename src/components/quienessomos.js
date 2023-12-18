import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/quienessomos.css";

function QuienesSomos() {

  return (
    <Container className="quienes-background" fluid>
        <Row>
            <Col className="quienes-texto">
                <h1>Quienes Somos</h1>
                <p>Desde 1947 presentes en el mercando Boliviano, brindando productos de calidad, con certificaciones y registros sanitarios al ámbito profesional de la salud.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default QuienesSomos;