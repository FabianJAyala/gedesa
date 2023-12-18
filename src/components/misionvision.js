import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/misionvision.css";

import imagen from "../images/mision.png";

function MisionVision() {

  return (
    <Container className="misionvision-cont mt-5 mb-5" fluid>
        <Row className="mb-3">
            <Col xl={4} lg={4} xs={4} align="right">
                <img src={imagen} height={100} alt="imagen" />
            </Col>
            <Col xl={8} lg={8} xs={8}>
                <h2>Misión</h2>
                <p>“Somos un equipo humano comprometido por una Bolivia sana”.</p>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xl={4} lg={4} xs={4} align="right">
                <img src={imagen} height={100} alt="imagen" />
            </Col>
            <Col xl={8} lg={8} xs={8}>
                <h2>Visión</h2>
                <p>“Ser referente en soluciones integrales de salud que impactan en la calidad de vida y bienestar de los Bolivianos, con el compromiso de un equipo humano de excelencia”.</p>
            </Col>
        </Row>
        <Row>
            <Col xl={4} lg={4} xs={4} align="right">
                <img src={imagen} height={100} alt="imagen" />
            </Col>
            <Col xl={8} lg={8} xs={8}>
                <h2>Valores</h2>
                <p>Respeto y empatía, Valorar al ser humano, Lealtad y honestidad, Innovación y Mejora Continua, Enfoque en el Cliente, Pasión, Accountability ,Equidad.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default MisionVision;