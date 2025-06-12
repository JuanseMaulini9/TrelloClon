import { useEffect, useState } from "react";

import Column from "./Column";
import Card from "./Card";

import { useBoard } from "../../hooks/board/useBoard";
import { useBoardStore } from "../../store/boardsStore";

import { useTask } from "../../hooks/task/useTask";
import type { Task } from "../../types";

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from "@dnd-kit/core";

const Board = () => {
  const { boards } = useBoardStore();
  const { getBoards } = useBoard();

  const { tasks, getTasks, updateTask } = useTask();

  const columns = ["To do", "In Progress", "Done"];

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  useEffect(() => {
    if (!boards || boards.length == 0) return;

    getTasks(boards[0]?.id);
  }, [boards, getTasks]);

  const getTasksForColumn = (columnName: string) => {
    if (!tasks || tasks.length === 0) return [];

    return tasks.filter((task) => {
      return task.state?.toLowerCase() === columnName.toLowerCase();
    });
  };

  const handleDragStart = (event: DragStartEvent) => {
    const taskId = Number(event.active.id);
    const found = tasks.find((task) => task.id === taskId);
    setActiveTask(found || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.data.current?.columnId === over.id) return;

    updateTask(Number(active.id), { state: over.id.toString() });
    setActiveTask(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragCancel={() => setActiveTask(null)}
      onDragEnd={handleDragEnd}
    >
      <main className="flex flex-row flex-1 items-start bg-neutral-900 gap-4 justify-start px-10 py-5 overflow-x-auto">
        {columns.map((column) => {
          const columnTasks = getTasksForColumn(column);

          return (
            <Column id={column} key={column}>
              {columnTasks.map((task) => (
                <Card
                  key={task.id}
                  title={task.title}
                  id={task.id.toString()}
                  columnId={task.state}
                />
              ))}
            </Column>
          );
        })}
      </main>
      <DragOverlay>
        {activeTask ? (
          <Card
            id={activeTask.id.toString()}
            title={activeTask.title}
            columnId={activeTask.state}
            isPhantom={true}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
