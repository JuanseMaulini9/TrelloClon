import { initUserTable } from "../models/user.model";
import { initBoardsTable } from "../models/board.model";
import { initTasksTable } from "../models/task.model";

export async function initTables() {
  await initUserTable();
  await initBoardsTable();
  await initTasksTable();
}
