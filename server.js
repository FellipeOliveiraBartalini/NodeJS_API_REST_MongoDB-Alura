const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Home',
    '/livros': 'Página de Livros',
    '/autores': 'Página de Autores',
    '/editoras': 'Página de Editoras',
    '/sobre': 'Página sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => console.log(`Servidor escutando: http://localhost:${port}`));
