const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Bruno Marques',
    });
});

app.listen(3333);