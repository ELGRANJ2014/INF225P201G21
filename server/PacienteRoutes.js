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

router.get('/', async (req, res) => {
    const fichas = await Paciente.find({}).sort({createdAt: 1})

    res.status(200).json(fichas)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No se ha encontrado la ficha'})
    }

    const ficha = await Paciente.findById(id)

    if (!ficha) {
        return res.status(404).json({error: 'No se ha encontrado la ficha'})
    }

    res.status(200).json(ficha)
})

router.patch('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No se encuentra la ficha'})
    }

    const ficha = await Paciente.findByIdAndUpdate({_id: id}, {
        "RUT": '999-9'
    })

    if (!ficha) {
        return res.status(400).json({error: 'No se encuentra la ficha'})
    }

    res.status(200).json(ficha)
})

module.exports = router;
