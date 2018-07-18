exports.up = (knex, Promise) => {
  return knex.schema.createTable('areas', table => {
    table.increments('area_id').primary()
    table.string('area_name')
    table.string('area_info')
    table.string('count')
    table.date('last_update_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('areas')
}
