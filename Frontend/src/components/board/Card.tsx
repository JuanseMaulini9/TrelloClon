import { useSortable } from "@dnd-kit/react/sortable";

interface Props {
  id: string;
  column: string;
  index: number;
}

export function Card({ id, column, index }: Props) {
  const { ref } = useSortable({
    id,
    index,
    group: column,
    type: "card",
    accept: ["card"],
  });

  return (
    <div
      className={`w-full bg-neutral-700 rounded p-2 cursor-grab active:cursor-grabbing`}
      ref={ref}
    >
      <h4>{id}</h4>
    </div>
  );
}

export default Card


