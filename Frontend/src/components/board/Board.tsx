import Column from "./Column";
import Card from "./Card";
import { useState } from "react";

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  type DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { type TaskInterface, type ColumnInterface } from "../../types";

const Board = () => {
  const columns: ColumnInterface[] = [
    { name: "To do", id: "column-1" },
    { name: "In progress", id: "column-2" },
    { name: "Done", id: "column-3" },
  ];

  const [tasks, setTasks] = useState<TaskInterface[]>([
    { id: "1", title: "Tarea 1", columnId: "column-1" },
    { id: "2", title: "Tarea 2", columnId: "column-1" },
    { id: "3", title: "Tarea 3", columnId: "column-2" },
  ]);

  const [activeCard, setActiveCard] = useState<TaskInterface | null>(null);


  const getTasks = (id: string) => {
    return tasks.filter((task) => task.columnId === id);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveCard(task || null);
  };


  const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

  if (!over) return;

  const activeId = active.id as string;
  const overId = over.id as string;

  const activeTask = tasks.find((task) => task.id === activeId);
  if (!activeTask) return;

  // Caso 1: Se soltó sobre una columna
  if (overId.startsWith("column-")) {
    const newColumnId = overId.replace("column-", "");

    if (activeTask.columnId !== newColumnId) {
      setTasks(
        tasks.map((task) =>
          task.id === activeId ? { ...task, columnId: newColumnId } : task
        )
      );
    }
  } 
  // Caso 2: Se soltó sobre otra card
  else {
    const overTask = tasks.find(task => task.id === overId);
    if (overTask && activeTask.columnId === overTask.columnId) {
      // Reordenar dentro de la misma columna
      const columnTasks = tasks.filter(task => task.columnId === activeTask.columnId);
      const activeIndex = columnTasks.findIndex(task => task.id === activeId);
      const overIndex = columnTasks.findIndex(task => task.id === overId);
      
      const reorderedTasks = arrayMove(columnTasks, activeIndex, overIndex);
      
      setTasks(tasks.map(task => {
        if (task.columnId === activeTask.columnId) {
          const newTask = reorderedTasks.find(t => t.id === task.id);
          return newTask || task;
        }
        return task;
      }));
    }
  }

  setActiveCard(null);
};

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <main className="flex flex-row flex-1 items-start bg-neutral-900 gap-4 justify-start px-10 py-5 overflow-x-auto">
        {columns.map((column) => (
          <Column
            name={column.name}
            id={column.id}
            key={column.id}
            tasks={getTasks(column.id)}
          />
        ))}
        <DragOverlay>
          {activeCard ? <Card id={activeCard.id} title={activeCard.title} isPhantom={true}></Card> : null}
        </DragOverlay>
      </main>
    </DndContext>
  );
};

export default Board;
