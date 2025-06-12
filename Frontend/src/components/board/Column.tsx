import type { ReactNode } from "react";

import { useDroppable } from "@dnd-kit/core";

interface Props {
  children: ReactNode;
  id: string;
}

const Column = ({ children, id }: Props) => {
  const { setNodeRef} = useDroppable({ id });

  return (
    <section
      ref={setNodeRef}
      className={`w-60 max-h-full flex flex-col gap-3 p-2 rounded-lg custom-scrollbar bg-neutral-800 text-white `}
    >
      <h3 className="p-2">{id}</h3>{" "}
      <div className="overflow-y-auto px-2 flex-1 flex flex-col gap-2">
        {children}
      </div>
      <button className="w-full text-start p-2 rounded-lg hover:cursor-pointer hover:bg-neutral-700">
        <span className="font-bold text-xl">+</span> Add a card
      </button>
    </section>
  );
};

export default Column;
