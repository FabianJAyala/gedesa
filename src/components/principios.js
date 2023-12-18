import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles/principios.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Principios() {
  return (
    <Container className="principios-cont" fluid>
        <h2 className="mb-5" align="center">PRINCIPIOS QUE NOS GUIAN</h2>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Crear un gran ambiente de trabajo, donde se valora al ser humano a través del respeto, empatía, dignidad, lealtad y honestidad.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Promover la diversidad y equidad como componentes esenciales en la forma en que hacemos negocios.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Buscar la innovación y mejora continua aplicando estándares de excelencia en los procesos para impactar en la calidad de vida de nuestro equipo humano, clientes y proveedores.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Trabajar con pasión para enamorar a nuestros clientes.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Ser sostenibles en el tiempo a través de una búsqueda continua de rentabilidad.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Satisfacer las necesidades de los clientes, brindando soluciones integrales y agregando valor a las marcas mundialmente reconocidas con las que trabajamos.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Aportar a la educación y formación continua de nuestro equipo humano y clientes.</p>
        <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#d4453e", marginRight: "8px" }} />Contribuir positivamente a nuestro país y al medio ambiente.</p>
    </Container>
  );
}

export default Principios;