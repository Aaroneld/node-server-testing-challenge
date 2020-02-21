const express = require('express');
const personDB = require('./persons-model');

const server = express();

server.use(express.json());

server.get('/', (req ,res) => {

    personDB.find()
        .then( persons => {
            res.status(200).json({persons});
        })
        .catch( err => {
            res.status(500).json({err: err.message})
        });
});

server.post('/', (req ,res) => {

    
    personDB.add(req.body)
        .then( person => {
            res.status(201).json({person});
        })
        .catch( err => {
            res.status(500).json({err: err.message})
        });

})

server.put('/:id', (req ,res) => {

    const { id } = req.params
    const changes = req.body;

    personDB.update(id, changes)
        .then( person => {
            res.status(201).json({person});
        })
        .catch( err => {
            res.status(500).json({err: err.message, id, changes})
        });

})

server.delete('/:id', (req ,res) => {

    const { id } = req.params
    
    personDB.remove(id)
        .then( person => {
            res.status(204).json({person});
        })
        .catch( err => {
            res.status(500).json({err: err.message})
        });

})

module.exports = server;
