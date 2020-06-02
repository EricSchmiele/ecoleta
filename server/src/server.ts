import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Eric',
        'Debora',
        'Fredy',
        'Pedro',
    ]);
});

app.listen(3333);