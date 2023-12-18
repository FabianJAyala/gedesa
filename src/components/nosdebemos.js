import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/nosdebemos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import imagen from "../images/imagendebemos.png";

function NosDebemos() {
  return (
    <Container className="debemos-cont mt-5 mb-5" align="center">
        <h2 className="mb-5">A QUIENES NOS DEBEMOS</h2>
        <Row>
            <Col lg={4} md={6} sm={12}>
                <Card className="text-white">
                    <Card.Img src={imagen} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ODONTÓLOGOS Y LABORATORISTAS</Card.Title>
                        <Card.Text>
                            Brindamos soluciones completas para las diferentes especialidades del área de medicina.
                        </Card.Text>
                    </Card.ImgOverlay>
                    <div className="soluc-button d-grid gap-2">
                        <Button variant="danger" size="lg">
                            Más información <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#ffffff", marginLeft: "5px" }} />
                        </Button>
                    </div>
                </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <Card className="text-white">
                    <Card.Img src={imagen} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>MÉDICOS PROFESIONALES</Card.Title>
                        <Card.Text>
                            Brindamos soluciones completas para las diferentes especialidades del área de medicina.
                        </Card.Text>
                    </Card.ImgOverlay>
                    <div className="soluc-button d-grid gap-2">
                        <Button variant="danger" size="lg">
                            Más información <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#ffffff", marginLeft: "5px" }} />
                        </Button>
                    </div>
                </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <Card className="text-white">
                    <Card.Img src={imagen} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>CUIDADO DEL HOGAR</Card.Title>
                        <Card.Text>
                            Brindamos soluciones completas para las diferentes especialidades del área de medicina.
                        </Card.Text>
                    </Card.ImgOverlay>
                    <div className="soluc-button d-grid gap-2">
                        <Button variant="danger" size="lg">
                            Más información <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#ffffff", marginLeft: "5px" }} />
                        </Button>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default NosDebemos;
