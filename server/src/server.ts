import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Eric',
    'Debora',
    'Fredy',
    'Pedro',
]

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredusers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredusers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        nome: data.name,
        email: data.email
    }

    return response.json(user);
});

app.listen(3333);