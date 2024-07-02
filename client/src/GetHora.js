const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/Hora', (req, res) => {
    res.send({ message: 'Hola mundo' });
})

app.listen(port, () => {
    console.log('API REST corriendo en http://localhost:${port}')    
})