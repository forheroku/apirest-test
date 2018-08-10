const express = require('express');
const aplicacion = express();

const request = require('request');

aplicacion.post('/api/:rut/:dve', (request, response) => {
    response.json({
        "rut": request.params.rut,
        "dve": request.params.dve
    });
});