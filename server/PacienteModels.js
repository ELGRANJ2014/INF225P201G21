const mongoose = require('mongoose');

// Define el esquema del paciente
const PacienteSchema = new mongoose.Schema({
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
    Tipo_de_exame: {
        type: String,
        required: true
    }
});

// Crea el modelo de Paciente basado en el esquema definido
const PacienteModel = mongoose.model('Paciente', PacienteSchema);

module.exports = PacienteModel;
