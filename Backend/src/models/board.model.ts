import { pool } from "../db/db";

interface Board {
  id: number;
  boardName: string;
  userId: number;
  createdAt: Date;
}

export async function initBoardsTable() {
  const createTable = `
    CREATE TABLE IF NOT EXISTS boards(
      id SERIAL PRIMARY KEY,
      boardName VARCHAR(100) NOT NULL,
      userId INT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `;

  await pool.query(createTable);
}

export async function createBoard(
  boardName: string,
  userId: number
): Promise<Board> {
  const query = `INSERT INTO boards(boardName, userId) VALUES ($1, $2) RETURNING *`;
  const values = [boardName, userId];
  const res = await pool.query(query, values);
  return res.rows[0];
}

export async function getBoardsByUserId(userId: number): Promise<Board[]> {
  const query = `SELECT * FROM boards WHERE userId = $1 ORDER BY id`;
  const values = [userId];
  const res = await pool.query(query, values);
  return res.rows;
}

export async function deleteBoard(boardId: number): Promise<Board> {
  const query = `DELETE FROM boards * WHERE id = $1`;
  const values = [boardId];
  const res = await pool.query(query, values);
  return res.rows[0];
}

export async function updateBoard(
  boardId: number,
  newName: string
): Promise<Board> {
  const query = `UPDATE boards SET boardName = $2 WHERE id = $1`;
  const values = [boardId, newName];
  const res = await pool.query(query, values);
  return res.rows[0];
}
