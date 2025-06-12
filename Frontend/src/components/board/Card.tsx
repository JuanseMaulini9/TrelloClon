import { useDraggable } from "@dnd-kit/core";

interface Props {
  title: string;
  id: string;
  columnId: string;
  isPhantom?:boolean
}

export function Card({ title, id, columnId, isPhantom }: Props) {
  const { attributes, listeners, setNodeRef, isDragging } =
    useDraggable({ id, data: { columnId } });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        opacity: isDragging ? 0 : 1,
      }}
      className={`w-full bg-neutral-700 rounded p-2 cursor-grab active:cursor-grabbing ${isPhantom ? "rotate-5 text-white": ""}`}
    >
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
