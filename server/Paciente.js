//const { RUT, Nombre, Fecha, Fonasa, Medico, Alergias, Observaciones, Diagnostico, Tipo_de_examen } = req.body;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define el esquema del paciente
const pacienteSchema = new mongoose.Schema({
  RUT: {
    type: String,
    required: true
},
Nombre: {
    type: String,
    required: true
},
Fecha: {
    type: Date,
    required: true
},
Fonasa: {
    type: String,
    required: true
},
Medico: {
    type: String,
    required: true
},
Alergias: {
    type: String,
    required: true
},
Observaciones: {
    type: String,
    required: true
},
Diagnostico: {
    type: String,
    required: true
},
Tipo_de_examen: {
    type: String,
    required: true
}
});

// Crea el modelo de paciente a partir del esquema
const Paciente = mongoose.model('Paciente', pacienteSchema, 'Usuarios.pacientes');

// Ruta para agregar un nuevo paciente
router.post('/', async (req, res) => {
  try {
      const { RUT, Nombre, Fecha, Fonasa, Medico, Alergias, Observaciones, Diagnostico, Tipo_de_examen } = req.body;
      // Crea un nuevo objeto de paciente con los datos recibidos
      const nuevoPaciente = new Paciente({
          RUT,
          Nombre,
          Fecha,
          Fonasa,
          Medico,
          Alergias,
          Observaciones,
          Diagnostico,
          Tipo_de_examen
      });
      // Intenta guardar el nuevo paciente en la base de datos
      await nuevoPaciente.save();
      console.log('Paciente guardado exitosamente:', nuevoPaciente);
      res.status(201).json({ message: 'Paciente creado exitosamente' });
  } catch (error) {
      console.error('Error al crear paciente:', error);
      if (error instanceof mongoose.Error.ValidationError) {
          // Si hay un error de validación, responde con un mensaje de error 400 Bad Request
          return res.status(400).json({ error: 'Error de validación', details: error.errors });
      }
      // Si hay otro tipo de error, responde con un mensaje de error 500 Internal Server Error
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
