import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./ingresarPaciente.css";
 

export default function IngresarPaciente() {
    const [form, setform] = useState({
        RUT: "",
        nombre: "",
        tipo_examen: "",
        nombre_medico: "",
        motivo: "",
        fecha: "",
        hora: ""
    });

const navigate = useNavigate();
function updateForm(value) {
    return setform((prev) => {
      return { ...prev, ...value };
    });
  }

async function onSubmit(e) {
    e.preventDefault();

    const nuevoPaciente = { ...form};

    await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoPaciente)
    })
    .catch(error => {
        window.alert(error);
        return;
    });

    setform({ RUT: "", nombre: "", tipo_examen: "", nombre_medico: "", motivo: "", fecha_hora: ""});
    navigate("/");
}

//todo esto hace parte del formulario
 return (
        <div className="form-container">
            <div>
                <div><h3>Agregar nuevo paciente</h3></div>
                <form onSubmit={onSubmit}>

                    
                    <div className="form-group">
                        <label htmlFor="RUT">RUT</label>
                        <input
                        type="text"
                        className="form-control"
                        id="RUT"
                        value={form.RUT}
                        onChange={(e) => updateForm({ RUT: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={form.nombre}
                        onChange={(e) => updateForm({ nombre: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipo_examen">Tipo de examen</label>
                        <select multiple name="examenes" id="examenes">
                        <option value="opcion1">Radiografía</option>
                        <option value="opcion2">Scanner</option>
                        <option value="opcion3">Ecografía</option>
                        <option value="opcion4">Resonancia</option>
                        </select>
                        <input
                        type="select"
                        className="form-control"
                        id="tipo_examen"
                        value={form.tipo_examen}
                        onChange={(e) => updateForm({ tipo_examen: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre_medico">Nombre del Médico</label>
                        <input
                        type="text"
                        className="form-control"
                        id="nombre_medico"
                        value={form.nombre_medico}
                        onChange={(e) => updateForm({ nombre_medico: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivo">Motivo del examen</label>
                        <input
                        type="text"
                        className="form-control"
                        id="motivo"
                        value={form.motivo}
                        onChange={(e) => updateForm({ motivo: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hora">Hora del examen</label>
                        <input
                        type="time"
                        className="form-control"
                        id="hora"
                        value={form.hora}
                        onChange={(e) => updateForm({ hora: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fecha">Fecha del examen</label>
                        <input
                        type="date"
                        className="form-control"
                        id="fecha"
                        value={form.fecha}
                        onChange={(e) => updateForm({ fecha: e.target.value })}
                        />
                    </div>
                    <div className="form-group button-container">
                        <input
                        type="submit"
                        value="Ingresar"
                        alignment="right"
                        className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
 );
}