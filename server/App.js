const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const db = require("./Database");
const pacienteRouter = require('./PacienteRoutes');

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 5010);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

db();

// Montar el enrutador en la ruta deseada
app.use('/Paciente', pacienteRouter);

app.listen(app.get('port'), () => {
    console.log('Servidor está corriendo en el puerto:', app.get('port'));
});

module.exports = app;