let client = require('knex-alasql');

export const alaSqlConfig = {
    client: client,
    name: 'knex_database',
    version: '1.0',
    displayName: 'knex_database', 
    estimatedSize: 5 * 1024 * 1024, 
    options: {
        mysql: true
    }
}