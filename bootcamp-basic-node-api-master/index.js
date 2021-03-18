const express = require("express");

const server = express();

server.use(express.json());


const projects = [{
  id: "1",
  title: "Desafio 01 Node Js",
  tasks: ["Criar as Rotas", "Criar os Middlewares"]
}];


/**
 * Middleware Global - Número de Requisições
 */
let numberRequests = 0;

server.use((req, res, next) => {
  numberRequests++;
  console.log(`Number of requests: ${numberRequests}`);

  return next();
});


/**
 * Middleware para checar se o projeto existe
 */
function checkIdExists(req, res, next) {
  const { id } = req.params;
  let exists = projects.some(f => f.id === id);

  if (!exists) {
    return res.status(400).json({ error: "Project does not exists" })
  }

  return next();
}


/**
 * Rotas da Aplicação
 */
server.get("/", (req, res) => {
  res.json({ GoStack: "Desafio 1: Conceitos do NodeJS" });
});

server.get("/projects", (req, res) => {
  res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  let exists = projects.some(f => f.id === id);
  if (exists) {
    return res.status(400).json({ error: "Project already exists with this Id" });
  }

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

server.put("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(f => f.id == id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(f => f.id === id);

  projects.splice(index, 1);

  return res.status(204).send();
});

server.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(f => f.id === id);

  project.tasks.push(title);

  return res.json(project);
});


server.listen(process.env.PORT || 3000);