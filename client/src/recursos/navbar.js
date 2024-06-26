import React from "react";
import "./navbar.css";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-with-border"
                to="/TuComponente"
              >
                Acceder
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-with-border"
                to="/IngresarPaciente"
              >
                Ingresar Nuevo Paciente
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-with-border"
                to="/calendarioHorarios"
              >
                Ver horas disponibles
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-with-border"
                to="/App"
              >
                Volver
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
