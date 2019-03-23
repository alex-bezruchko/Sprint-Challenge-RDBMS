const express = require('express');
const server = express();
const actionsDb = require('./data/helpers/actionsDb');

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


module.exports = server;