
exports.up = function (knex) {
    return knex.schema
        .createTable('project', (tbl) => {
            tbl.increments();

            // * KEY-VALUES
            tbl.string('name', 255).notNullable();
            tbl.string('description', 255);
            tbl.boolean('completed').notNullable();
        })
        .createTable('task', (tbl) => {
            tbl.increments();

            // * KEY-VALUES
            tbl.string('description', 255).notNullable();
            tbl.string('notes', 255);
            tbl.boolean('completed').notNullable();

            // * FOREIGN KEY
            tbl
                .integer('task_id')
                .unsigned()
                .references('id')
                .inTable('project')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('resources', (tbl) => {
            tbl.increments();

            // * KEV-VALUES 
            tbl.string('name', 255).notNullable();
            tbl.string('description', 255);

            // * FOREIGN KEY
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('project')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('task')
        .dropTableIfExists('resources');
};
