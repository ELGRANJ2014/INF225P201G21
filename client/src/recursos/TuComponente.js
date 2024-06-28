import React, { useState } from "react";
import "./TuComponente.css"

const Login = () => {

    const [form, setForm] = useState({
        nombre: '',
        contrasena: '',
    });

    const changelog = (e) => {
        const value = e.target.value;
        setForm(value)
    };

    const guardarDatos = () => {
        
    };

    return (
        <div className="login">
            <h2>Registrarse</h2>
            <form>
              <div className="form-input">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={changelog}
                  required></input>
                <label className="input-label">
                  Nombre
                </label>
              </div>
              <div className="form-input">
                <input
                  id="contrasena"
                  name="contrasena"
                  type="password"
                  value={form.contrasena}
                  onChange={changelog}
                  required></input>
                <label className="input-label">
                  Contraseña
                </label>
              </div>
              <button onClick={guardarDatos} to={"/TuComponente"}>Crear</button>
            </form>
        </div>
    );

};

export default Login;