module.exports = {
    client:"mysql2",
    connection: {
        host: 'sql12.freesqldatabase.com', // Your MySQL server host, or '127.0.0.1' for local server
        user: 'sql12727145', // MySQL user
        password: 'ZjptFQwbIh', // MySQL user password
        database: 'sql12727145', // Your database name
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