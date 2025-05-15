import { pool } from "../db/db";

export interface User {
  id: number;
  username: string;
  password: string;
  createdAt?: Date;
}

export async function initUserTable() {
  const createTable = `
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await pool.query(createTable);
}

export async function createUser(
  username: string,
  password: string
): Promise<User> {
  const query = `
    INSERT INTO users(username, password) VALUES($1, $2) RETURNING *
  `;
  const values = [username, password];

  const res = await pool.query(query, values);
  const newUser: User = res.rows[0];
  return newUser;
}

export async function getUserById(id: number): Promise<User> {
  const query = `
    SELECT * FROM users WHERE id = $1
  `;
  const values = [id];

  const res = await pool.query(query, values);
  const user: User = res.rows[0];
  return user;
}

export async function getUserByUsername(username: string): Promise<User> {
  const query = `
    SELECT * FROM users WHERE username = $1
  `;
  const values = [username];

  const res = await pool.query(query, values);
  const user: User = res.rows[0];
  return user;
}
