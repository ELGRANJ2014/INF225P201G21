const express = require("express");



const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/test/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    RUT: req.body.Rut,
    Nombre: req.body.Nombre,
    Fecha: req.body.Fecha,
    Fonasa: req.body.Fonasa,
    Medico: req.body.Medico,
    Alergias: req.body.Alergias,
    Observaciones: req.body.Observaciones,
    Diagnostico: req.body.Diagnostico,
    Tipo_de_examen: req.body.Tipo_de_examen,
  };
  db_connect.collection("test").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;