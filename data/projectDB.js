const db = require('./dbConfig');

const getById = (id) => {
    return db('project')
        .where({ id })
        .first();
}

const add = (project) => {
    return db('project').insert(project)
        .then(id => getById(id[0]));
}

const getAll = async () => {

    const projects = await db('project').map(index => {
        // console.log(index)
        if (index.completed === 0 || index.completed === '0') {
            return {
                ...index,
                completed: false
            }
        } else if (index.completed === 1 || index.completed === '1') {
            return {
                ...index,
                completed: true
            }
        }
    })

    return projects;
}

module.exports = {
    add,
    getAll
}