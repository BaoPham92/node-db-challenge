// * PKGS & SETTINGS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const settings = [express.json(), helmet(), morgan('combined')];
server.use(settings);

// * HELPER METHODS
const project = require('../data/projectDB');
const task = require('../data/taskDB');
const resources = require('../data/resourceDB');

server.get('/projects', (req, res) => {
    project.getAll()
        .then(projectList => res.status(200).json(projectList))
        .catch(err => res.status(500).json({ error: err }))
})

server.post('/projects', (req, res) => {
    // console.log(req.body)

    project.add(req.body && req.body)
        .then(newProject => res.status(200).json(newProject))
        .catch(err => res.status(500).json({ error: err }))
})

server.get('/tasks', (req, res) => {
    task.getAll()
        .then(taskList => res.status(200).json(taskList))
        .catch(err => res.status(500).json({ error: err }))
}
)
server.post('/tasks', (req, res) => {
    // console.log(req.body)
    task.add(req.body && req.body)
        .then(newTask => res.status(200).json(newTask))
        .catch(err => res.status(500).json({ error: err }))
})

server.get('/resources', (req, res) => {
    resources.getAll()
        .then(resourceList => res.status(200).json(resourceList))
        .catch(err => res.status(500).json({ error: err }))
})

server.post('/resources', (req, res) => {
    // console.log(req.body)
    resources.add(req.body && req.body)
        .then(newResource => res.status(200).json(newResource))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = server;