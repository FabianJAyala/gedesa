import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../components/styles/formtemplate.css";
import * as formik from "formik";
import * as yup from "yup";

function FormTemplate() {
  const form = useRef();

  const { Formik } = formik;

  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  const schema = yup.object().shape({
    nombreCompleto: yup.string().required("El nombre completo es un espacio requerido."),
    email: yup.string().email("Porfavor ingrese un email valido.").required("El email es un espacio requerido."),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, {message: "Porfavor ingrese un número de celular valido.", excludeEmptyString: false}),
    ciudad: yup.string(),
    comprar: yup.bool(),
    proveedor: yup.bool(),
    reparacion: yup.bool(),
    otros: yup.bool(),
    comentario: yup.string(),
    condiciones: yup.bool(),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        nombreCompleto: '',
        email: '',
        phone: '',
        ciudad: '',
        comprar: false,
        proveedor: false,
        reparacion: false,
        otros: false,
        comentario: '',
        condiciones: true,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        emailjs.sendForm('service_81ropxn', 'template_d67ye0w', form.current, '-9O7KV2iJPn-faFHq')
        .then((result) => {
          setIsSuccessAlertShown(true);
          setIsErrorAlertShown(false);
          resetForm();
          setSubmitting(false);
        })
        .catch((error) => {
          setIsSuccessAlertShown(false);
          setIsErrorAlertShown(true);
          setSubmitting(false);
        });
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form ref={form} onSubmit={handleSubmit}>
          {isSuccessAlertShown && (
            <Alert variant="success">
              Su mensaje fue enviado exitosamente!
              Pronto nos contactaremos contigo.
            </Alert>
          )}
          {isErrorAlertShown && (
            <Alert variant="warning">
              Hubo un problema al enviar el formulario.
              Por favor, intente nuevamente en unos minutos.
            </Alert>
          )}
          <Row className="mb-3">
          <Form.Group className="form-mobile" as={Col} md="6" controlId="validationFormikNombreCompleto">
              <Form.Label>Nombre Completo *</Form.Label>
              <Form.Control
                type="text"
                name="nombreCompleto"
                value={values.nombreCompleto}
                onChange={handleChange}
                isInvalid={touched.nombreCompleto && !!errors.nombreCompleto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreCompleto}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group className="form-mobile" as={Col} md="6" controlId="validationFormikCelular">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikCiudad">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                name="ciudad"
                value={values.ciudad}
                onChange={handleChange}
                isInvalid={!!errors.ciudad}
              />
              <Form.Control.Feedback type="invalid">
                {errors.ciudad}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <p>Tipo de Servicio de interés:</p>
            <Form.Group as={Col} md="3" xs="6" controlId="validationFormikCheckboxComprar">
              <Form.Check
                type="checkbox"
                name="comprar"
                label="Comprar"
                checked={values.comprar}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" xs="6" controlId="validationFormikCheckboxProveedor">
              <Form.Check
                type="checkbox"
                name="proveedor"
                label="Proveedor"
                checked={values.proveedor}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" xs="6" controlId="validationFormikCheckboxReparacion">
              <Form.Check
                type="checkbox"
                name="reparacion"
                label="Reparación"
                checked={values.reparacion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" xs="6" controlId="validationFormikCheckboxOtros">
              <Form.Check
                type="checkbox"
                name="otros"
                label="Otros"
                checked={values.otros}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationFormikMessage">
              <Form.Label>Deja tu mensaje aquí</Form.Label>
              <Form.Control
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group as={Col} md="12" controlId="validationFormikCondiciones">
                <Form.Check
                    type="checkbox"
                    name="condiciones"
                    label="Acepto la Política de Privacidad y los Términos y Condiciones"
                    checked={values.condiciones}
                    onChange={handleChange}
                />
            </Form.Group>
          </Row>
          <Button id="send-form-btn" variant="danger" type="submit">Enviar Formulario</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormTemplate;