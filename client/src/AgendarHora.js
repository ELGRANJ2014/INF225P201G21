import React, { useState } from "react";
import "./agendarHora.css"

const AgendarHora = () => {
  document.body.style.backgroundColor = "aliceblue;";

  const [formData, setFormData] = useState({
    RUT: '',
    Nombre: '',
    Fecha: '',
    Fonasa: '',
    Medico: '',
    Alergias: '',
    Observaciones: '',
    Diagnostico: '',
    Tipo_de_examen: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5010/Paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .catch(error => {
        console.error('Error al realizar la solicitud fetch:', error);
        window.alert('Error al realizar la solicitud fetch: ' + error.message);
        return;
      });

      if (response.ok) {
        console.log('Datos del formulario enviados correctamente al servidor');
        setFormData({
          RUT: '',
          Nombre: '',
          Fecha: '',
          Fonasa: '',
          Medico: '',
          Alergias: '',
          Observaciones: '',
          Diagnostico: '',
          Tipo_de_examen: '',
        });
      } else {
        console.error('Error al enviar datos al servidor');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="form-container">
      <div>
        <h3>Agregar un nuevo paciente</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="RUT">RUT</label>
            <input
              type="text"
              name="RUT"
              className="form-control"
              value={formData.RUT}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Nombre">Nombre</label>
            <input
              type="text"
              name="Nombre"
              className="form-control"
              value={formData.Nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Fecha">Fecha de Nacimiento</label>
            <input
              type="date"
              name="Fecha"
              className="form-control"
              value={formData.Fecha}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Fonasa">Tramo de Fonasa</label>
            <input
              type="text"
              name="Fonasa"
              className="form-control"
              value={formData.Fonasa}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Medico">Medico que lo deriva</label>
            <input
              type="text"
              name="Medico"
              className="form-control"
              value={formData.Medico}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Alergias">Posibles alergias</label>
            <input
              type="text"
              name="Alergias"
              className="form-control"
              value={formData.Alergias}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Observaciones">Observaciones</label>
            <input
              type="text"
              name="Observaciones"
              className="form-control"
              value={formData.Observaciones}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Diagnostico">Posible diagnostico</label>
            <input
              type="text"
              name="Diagnostico"
              className="form-control"
              value={formData.Diagnostico}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Tipo_de_examen">Tipo de examen</label>
            <input
              type="text"
              name="Tipo_de_examen"
              className="form-control"
              value={formData.Tipo_de_examen}
              onChange={handleChange}
            />
          </div>
          
        </form>
      <div className="button-container">
          <input
            type="submit"
            value="Crear paciente"
            className="btn btn-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AgendarHora;