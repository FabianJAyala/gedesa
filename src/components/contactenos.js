import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/contactenos.css';
import Map from "./map";
import FormularioContacto from "./formulariocontacto";
import imagen from "../images/mision.png";

function Contactenos() {
  return (
    <Container className="contactenos-cont mb-5" align="center" fluid>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
      <Row>
        <Col className="info-contacto" xl={6} lg={6} xs={12}>
          <h5 className="mb-5">Para realizar pedidos, hacer consultas o cotizaciones, contáctanos a las siguientes direcciones</h5>
          <Row>
            <Col xl={4} lg={4} xs={4} align="right">
                <img src={imagen} height={100} alt="imagen" />
            </Col>
            <Col xl={8} lg={8} xs={8}>
                <h5>COMERCIAL</h5>
                <a href="https://wa.me/77752525">(+591) 77752525</a><br></br>
                <a href="mailto:ventas@gedesa.com">ventas@gedesa.com</a>
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} xs={4} align="right">
                <img src={imagen} height={100} alt="imagen" />
            </Col>
            <Col xl={8} lg={8} xs={8}>
                <h5>ASISTENCIA TÉCNICA</h5>
                <a href="https://wa.me/76403676">(+591) 76403676</a><br></br>
                <a href="mailto:info@topservice.com.bo">info@topservice.com.bo</a>
            </Col>
          </Row>
        </Col>
        <Col className="horarios-box" xl={6} lg={6} xs={12}>
          <Row className="info-box mb-3">
            <h2 className="mb-3">Horarios de Atención</h2>
            <p>Lunes a Viernes 08:30AM - 17:00PM</p>
            <p>Sábado 08:30AM - 12:00PM</p>
          </Row>
          <Row className="form-box">
            <p>
              Queremos conocer su percepcion sobre nuestra empresa y nuestros productos. Envia tu opinión y/o sugerencia:
            </p>
            <FormularioContacto />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactenos;
