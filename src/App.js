import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/navbar';
import Footer from './components/footer';
import PaginaInicio from './routes/paginainicio';
import AcercaDe from './routes/acercade';
import Contacto from './routes/contacto';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<PaginaInicio />}/>
        <Route path="acercade" element={<AcercaDe />}/>
        <Route path="contacto" element={<Contacto />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
