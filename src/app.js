import express, { application } from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: 'Star Wars IV'
    },
    {
        id: 2,
        titulo: 'O Guia do Mochileiro das Galáxias'
    }
];

app.get('/', (req, res) => {
    res.status(200)
        .send('Ta tudo certo 2.0!');
});

app.get('/livros', (req, res) => {
    res.status(200)
        .json(livros);
});

export default app;
