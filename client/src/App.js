import React from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {
  useRoutes
} from 'react-router-dom';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
 
// We import all the components we need in our app

import IngresarPaciente from "./recursos/IngresarPaciente";
import Navbar from "./recursos/navbar";
import TuComponente from "./recursos/TuComponente";
import CalendarioHorarios from "./recursos/calendarioHorarios";



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/TuComponente" element={<TuComponente />} />

        <Route path="/calendarioHorarios" element={<CalendarioHorarios />} />

        <Route path="/IngresarPaciente" element={<IngresarPaciente />} />
      </Routes>
    </div>
  );
 };

 export default App;

