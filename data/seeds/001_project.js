
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1,
          name: 'First project, the SEED project.',
          description: 'No real description. Just go buy more VeChain.',
          completed: false
        },
        {
          id: 2,
          name: 'Second project, a OLRS thing.',
          description: 'Random break in life. Play some OSRS.',
          completed: false
        },
        {
          id: 3,
          name: 'Third project, the SEED project.',
          description: 'Only one of many legit projects, just go for it!',
          completed: false
        }
      ]);
    });
};
