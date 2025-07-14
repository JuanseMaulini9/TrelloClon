import { useEffect, useState } from "react";

import Column from "./Column";
import Card from "./Card";
import Header from "./Header";

import { useBoard } from "../hooks/useBoard";
import { useBoardStore } from "../store/boardsStore";

import { useTask } from "../../task/hooks/useTask";
import type { Task } from "../../../types";

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from "@dnd-kit/core";
import ModalBoard from "./ModalBoard";
import ModalCard from "./ModalCard";

const Board = () => {
  const { boards, createBoardModal, addCardModal } = useBoardStore();
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
      <main className="flex flex-col flex-1 items-start bg-neutral-900 gap-5 justify-start overflow-x-auto">
        <div className="w-full text-white text-center">
          <Header></Header>
        </div>
        <div className="flex flex-row flex-1 items-start gap-4 px-4 py-5">
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
        </div>
        
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
      {
        createBoardModal && <ModalBoard/>
      }
      {
        addCardModal && <ModalCard></ModalCard>
      }
    </DndContext>
    
  );
};

export default Board;
