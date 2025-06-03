import Card from "./Card";

import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useState } from "react";

interface ColumnProps {
  id: string;
  name: string;
}

const Column = ({ name }: ColumnProps) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.indexOf(active.id as string);
    const newIndex = tasks.indexOf(over.id as string);

    if (oldIndex === -1 || newIndex === -1) return;

    setTasks((tasks) => arrayMove(tasks, oldIndex, newIndex));
  };

  const [tasks, setTasks] = useState<string[]>(["1", "2", "3"]);

  return (
    <section className="w-60 max-h-full flex flex-col gap-3 p-2 bg-neutral-800 text-white rounded-lg custom-scrollbar">
      <h3 className="p-2">{name}</h3>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {" "}
          <div className="overflow-y-auto px-2 flex-1 flex flex-col gap-2">
            {tasks.map((tasksId) => (
              <Card id={tasksId} key={tasksId}></Card>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button className="w-full text-start p-2 rounded-lg hover:cursor-pointer hover:bg-neutral-700">
        <span className="font-bold text-xl">+</span> Add a card
      </button>
    </section>
  );
};

export default Column;
