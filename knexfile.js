module.exports = {
    client:"mysql2",
    connection: {
        host: 'sql.freedb.tech', // Your MySQL server host, or '127.0.0.1' for local server
        user: 'freedb_settu', // MySQL user
        password: '@X!ZZnYNWdq7!fr', // MySQL user password
        database: 'freedb_task_database', // Your database name
        charset: 'utf8', // Character set (optional, defaults to 'utf8')
      },
      migrations: {
        tableName: 'knex_migrations', // Table for migrations
        directory: './migrations', // Directory for migration files
      },
      seeds: {
        directory: './seeds', // Directory for seed files
      },
};