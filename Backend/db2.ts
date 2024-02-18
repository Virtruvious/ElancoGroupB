import { createPool, Pool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

// Create a new connection pool
const pool: Pool = createPool({
  host: "localhost",
  user: process.env.DATABASE_USERNAME, // Set this in your .env file
  password: process.env.DATABASE_PASSWORD,
  port: 3306,
  database: "elanco"
});

export { pool };
