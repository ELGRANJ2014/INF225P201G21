import React, { useState } from "react";
import "./TuComponente.css"

// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new moongose.Schema({
//     nombre: { type: String, required: true },
//     contrasena: { type: String, required: true}
// });

// userSchema.pre('save', function(next){
//     if(this.isNew || this.isModified('contrasena')){
//         const document = this;

//         bcrypt.hash(document.contrasena, saltRounds, (err, hashedPassword) => {
//             document.contrasena = hashedPassword;
//             next();
//         });
//     } else {
//         next();
//     }
// });

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
                <label>Nombre</label>
                <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={changelog}
                required></input>
              </div>
              <div className="form-input">
                <label>Contraseña</label>
                <input
                id="contrasena"
                name="contrasena"
                type="password"
                value={form.contrasena}
                onChange={changelog}
                required></input>
              </div>
              <button onClick={guardarDatos} to={"/TuComponente"}>Crear</button>
            </form>
        </div>
    );

};

export default Login;