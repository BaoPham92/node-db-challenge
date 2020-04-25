const db = require('./dbConfig');

const getById = (id) => {
    return db('resources')
        .where({ id })
        .first();
}

const add = (resource) => {
    return db('resources').insert(resource)
        .then(id => getById(id[0]));;
}

const getAll = () => {
    return db('resources');
}

module.exports = {
    add,
    getAll
}