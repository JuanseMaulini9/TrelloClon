import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  id: string;
  title: string
  isPhantom?: boolean
}

const Card = ({ id, title, isPhantom = false }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

    const phantomStyles = isPhantom 
    ? "bg-neutral-500 opacity-80 shadow-lg rotate-3" 
    : "bg-neutral-600";

  return (
    <div 
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className={`w-full ${phantomStyles} rounded p-2 cursor-grab active:cursor-grabbing`}>
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
