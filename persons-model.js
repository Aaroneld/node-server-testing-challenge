const db = require('./data/dbconfig.js');


module.exports = {
    find,
    add, 
    update,
    remove
};


function find(){

    return db('persons')
}

function add(person){
    return db('persons').insert(person);
}

function update(id, changes){
    return db('persons').where({id: id}).update(changes);
}

function remove(id){
    return db('persons').where({id: id}).del();
}