// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travelapp',
  password: '',
  port: 5432,
});

export default pool;
