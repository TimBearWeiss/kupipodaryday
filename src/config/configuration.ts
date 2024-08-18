export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3001,
  },

  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DB_USER || 'student',
    password: process.env.DB_PASSWORD || 'student',
    name: process.env.DB_NAME || 'nest_project',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'super_secret',
    ttl: process.env.JWT_TTL || '30000s',
  },
});
