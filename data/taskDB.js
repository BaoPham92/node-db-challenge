const db = require('./dbConfig');

const getById = (id) => {
    return db('task')
        .where({ id })
        .first();
}

const add = (task) => {
    return db('task').insert(task)
        .then(id => getById(id[0]));;
}

const getAll = async () => {

    const tasks = await db('task').map(index => {
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

    // console.log(tasks)
    return tasks;
}

module.exports = {
    add,
    getAll
}