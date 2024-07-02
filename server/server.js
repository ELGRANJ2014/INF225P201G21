const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

// app.use(require("./Routes/record"));s
const dbo = require("./db/conn");

const rutas = require('./PacienteRoutes')

// rutas
app.use('/Paciente', rutas)

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});