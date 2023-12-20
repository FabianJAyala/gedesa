import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../components/styles/formtemplate.css";
import * as formik from "formik";
import * as yup from "yup";

function FormularioContacto() {
  const form = useRef();

  const { Formik } = formik;

  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  const schema = yup.object().shape({
    nombreCompleto: yup.string().required("El nombre completo es un espacio requerido."),
    email: yup.string().email("Porfavor ingrese un email valido.").required("El email es un espacio requerido."),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, {message: "Porfavor ingrese un número de celular valido.", excludeEmptyString: false}),
    mensaje: yup.string(),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        nombreCompleto: '',
        email: '',
        mensaje: '',
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
          <Form.Group className="form-mobile" as={Col} md="12" controlId="validationFormikNombreCompleto">
              <Form.Control
                placeholder="Nombre Completo *"
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
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationFormikEmail">
              <Form.Control
                placeholder="Email *"
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
          <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationFormikMessage">
              <Form.Control
                placeholder="Deja tu mensaje aquí"
                type="text"
                name="mensaje"
                value={values.mensaje}
                onChange={handleChange}
                isInvalid={!!errors.mensaje}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mensaje}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button id="send-form-btn" variant="danger" type="submit">Enviar Formulario</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormularioContacto;