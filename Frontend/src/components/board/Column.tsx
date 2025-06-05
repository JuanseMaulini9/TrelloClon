import Card from "./Card";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { type ColumnProps } from "../../types";

const Column = ({ name, tasks, id }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: `column-${id}`,
  });

  const taskIds = tasks.map((task) => task.id);

  return (
    <section
      ref={setNodeRef}
      className="w-60 max-h-full flex flex-col gap-3 p-2 bg-neutral-800 text-white rounded-lg custom-scrollbar"
    >
      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
      <h3 className="p-2">{name}</h3>{" "}
        <div className="overflow-y-auto px-2 flex-1 flex flex-col gap-2">
          {tasks.map((task) => (
            <Card id={task.id} key={task.id} title={task.title}></Card>
          ))}
        </div>
      <button className="w-full text-start p-2 rounded-lg hover:cursor-pointer hover:bg-neutral-700">
        <span className="font-bold text-xl">+</span> Add a card
      </button>
      </SortableContext>
    </section>
  );
};

export default Column;
