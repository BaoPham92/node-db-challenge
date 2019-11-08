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

const getAll = async (id) => {

    // select * FROM task JOIN project on project.id = task.task_id;

    const tasksList = await db('task')
    .join('project', 'project.id', 'task_id')
    .select('task.*', 'project.name', 'project.description')
    console.log(tasksList)

    const tasks = await db('task')
    .join('project', 'project.id', 'task_id')
    .select('task.*', 'project.name', 'project.description')
    .map(index => {
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