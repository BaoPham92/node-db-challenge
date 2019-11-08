
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          id: 1,
          description: 'Task belonging to project 1',
          notes: '',
          completed: false,
          task_id: 1
        },
        {
          id: 2,
          description: 'Task belonging to project 2',
          notes: '',
          completed: false,
          task_id: 2
        },
        {
          id: 3,
          description: 'Task belonging to porject 3',
          notes: '',
          completed: false,
          task_id: 3
        }
      ]);
    });
};
