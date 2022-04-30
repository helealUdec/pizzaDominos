const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const { applyEach } = require('async');
const app = express();

// puerto donde se ejecuta
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// indicar donde estan los elemntos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// operaciones get
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/pedido', (req, res) => {
    res.render('pages/pedido');
});

app.get('/menu', (req, res) => {
    res.render('pages/menu');
});

// cuando se inicia el servidor
app.listen(app.get('port'), () => {
    console.log('Ejecutando servidor');
});


