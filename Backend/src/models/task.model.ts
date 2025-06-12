import { pool } from "../db/db";

interface Task {
  id: number;
  boardId: number;
  state: string;
  position: number;
  title: string;
  description?: string;
  type?: string;
  priority?: string;
  limitTime?: Date;
  createdAt: Date;
}

export async function initTasksTable() {
  const createTable = `
      CREATE TABLE IF NOT EXISTS tasks(
        id SERIAL PRIMARY KEY,
        boardId INT,
        state VARCHAR(100) NOT NULL,
        position INT,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(100),
        type VARCHAR(100),
        priority VARCHAR(100),
        limitTime TIMESTAMP,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (boardId) REFERENCES boards(id)
      )
    `;

  await pool.query(createTable);
}

export async function createTask(
  boardId: number,
  state: string,
  position: number,
  title: string,
  description: string,
  type: string,
  priority: string,
  limitTime: Date
): Promise<Task> {
  const query = `INSERT INTO tasks(boardId, state, position, title, description, type, priority, limitTime) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const values = [
    boardId,
    state,
    position,
    title,
    description,
    type,
    priority,
    limitTime,
  ];

  const res = await pool.query(query, values);
  return res.rows[0];
}

export async function getAllTasksByBoardId(boardId: number): Promise<Task[]> {
  const query = `SELECT * FROM tasks WHERE boardId = $1 ORDER BY id`;
  const values = [boardId];

  const res = await pool.query(query, values);
  return res.rows;
}

export async function deleteTask(id: number): Promise<number> {
  const query = `DELETE FROM tasks WHERE id = $1`;
  const values = [id];

  const res = await pool.query(query, values);
  return res.rowCount ?? 0;
}

export async function updatetask(
  id: number,
  title: string,
  description: string,
  state: string,
  type: string,
  priority: string,
  limitTime: string
): Promise<Task> {
  const query = `
    UPDATE tasks SET title = $2, description = $3, state = $4, type= $5, priority = $6, limitTime = $7  WHERE id = $1 RETURNING *
  `;
  const values = [id, title, description, state, type, priority, limitTime];

  const res = await pool.query(query, values);
  return res.rows[0];
}

export async function updateStateTask(
  id: number,
  state: string
): Promise<Task> {
  const query = `UPDATE tasks SET state = $2 WHERE id = $1 RETURNING *`;
  const values = [id, state];
  const res = await pool.query(query, values);
  return res.rows[0];
}
