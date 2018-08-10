const express = require('express');
const aplicacion = express();

const request = require('request');

aplicacion.set('port', process.env.PORT || 3000);


aplicacion.post('/api/:rut/:dve', (request, response) => {
    response.json({
        "rut": request.params.rut,
        "dve": request.params.dve
    });
});

aplicacion.listen(aplicacion.get('port'), () => {
    console.log('Server connected on port ', aplicacion.get('port'));
});