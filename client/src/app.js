// Importa los módulos necesarios
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const connection = require('../../database/db'); // Asegúrate de tener tu archivo de conexión a la base de datos correctamente configurado

// Configura las variables de entorno
dotenv.config({ path: './env/.env' });

// Configura la aplicación Express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

// Configura la sesión
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Definir las rutas de tu aplicación

app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.get('/register', (req, res)=>{
    res.render('register');
})
app.get('/review', (req, res)=>{
    res.render('review');
})
app.get('/About', (req, res)=>{
    res.render('About');
})
app.get('/eventos', (req, res)=>{
    res.render('eventos');
})
app.get('/invitacion', (req, res)=>{
    res.render('invitacion');
})
app.get('/soporte', (req, res)=>{
    res.render('soporte');
})
app.get('/patrocinios', (req, res)=>{
    res.render('patrocinios');
})
app.get('/eventosRecientes', (req, res)=>{
    res.render('eventosRecientes');
})
// ...

// Inicia el servidor
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


// En App.js
import React from 'react';
import LoginButton from './components/LoginButton'; // Importa desde LoginButton.js
import LogoutButton from './components/LogoutButton'; // Importa desde LogoutButton.js

function App() {
    return (
        <div className="App">
            <LoginButton />
            <LogoutButton />
        </div>
    );
}

export default App;

