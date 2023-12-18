import React from 'react';
import Soluciones from '../components/soluciones';
import Carrusel from '../components/carrusel';
import NosDebemos from '../components/nosdebemos';
import Diferencia from '../components/diferencia';
import Marcas from '../components/marcas';
import Noticias from '../components/noticias';
import Formulario from '../components/formulario';

const PaginaInicio = () => {
  return (
    <>
      <Soluciones />
      <Carrusel />
      <NosDebemos />
      <Diferencia />
      <Marcas />
      <Formulario />
      <Noticias />
    </>
  );
};

export default PaginaInicio;
