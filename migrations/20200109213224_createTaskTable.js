
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('task', function (table) {
          table.increments()
          table.string('subject', 255)
          table.integer('rate')
        })
      ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('task')
      ])
};
