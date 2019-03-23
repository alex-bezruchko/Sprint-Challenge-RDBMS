const express = require('express');
const server = express();
const actionsDb = require('./data/helpers/actionsDb');
const projectsDb = require('./data/helpers/projectsDb');
server.use(express.json());




server.get('/api/actions/', async (req, res) => {
    try {
        const actions = await actionsDb.getAllActions()
        if (actions) {
            res.status(200).json(actions)
        }
        else {
            res.status(404).json('No actions available')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
});

server.get('/api/actions/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const action = await actionsDb.getActionsById(id)
        if (action) {
            res.status(200).json(action)
        }
        else {
            res.status(404).json('This id is not available')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
});

server.post('/api/actions/', async (req, res) => {
    const newAction = req.body;
    try {

        const action = await actionsDb.insert(newAction)
        if (action) {
            res.status(200).json(action)
        }
        else {
            console.log('error')
            res.status(404).json('All fields are required')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = server;