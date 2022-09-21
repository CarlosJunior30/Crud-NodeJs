const express = require('Express');

const server = express();

server.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games','Vídeo de Youtube'];

//Crud = Create, Read, Update, Delete


//Retorna um dos Cursos GET

server.get ('/cursos/:index', (req,res) => {
    const {index} = req.params;

    return res.json(cursos[index]);

});

//Retornar todos os cursos GET
server.get('/cursos', (req,res) => {
    return res.json (cursos)
});

//Criar um novo Curso POST
server.post('/cursos', (req,res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualização do Curso PUT

server.put('/cursos/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body; // irá alterar o nome dentro de curso

    cursos [index] = name;

    return res.json(cursos);

});

//Deletar um Curso DELETE
server.delete('/cursos/:index', (req,res) => {
    const {index} = req.params;

    cursos.splice(index, 1);
    return res.json({message :"O Curso foi DELETADO"});

});


server.listen(3000);