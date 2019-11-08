
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: 'Resources to Varrock center is hidden by the Grand Exchange.',
          description: 'The resource should lead us to finding the ability to trim run and dragon gear.',
          resource_id: 2
        },
        {
          id: 2,
          name: 'Monkey Madness supplies are in the wilderness by KBD.',
          description: 'In order to complete and retrieve a dragon scimmy, we need to get the supplies in order to complete the quest. Even if we have to fight the KBD in the wilderness...',
          resource_id: 2
        },
        {
          id: 3,
          name: 'Godwars tool sets.',
          description: 'Contain a Zamorak godsword, DFS, Fire Cape, and a full inventory of overload pots.',
          resource_id: 1
        }
      ]);
    });
};
