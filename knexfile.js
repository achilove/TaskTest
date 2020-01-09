module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://task:jIuhlkVmdU@localhost:5432/task_db'
  };