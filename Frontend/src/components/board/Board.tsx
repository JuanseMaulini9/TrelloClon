import Column from "./Column";

import { useState } from "react";

interface ColumnInterface {
  name: string;
  id: string;
}

const Board = () => {
  const [columns] = useState<ColumnInterface[]>([
    { name: "To do", id: "1" },
    { name: "In progress", id: "2" },
    { name: "Done", id: "3" },
  ]);

  return (
    <main className="flex flex-row flex-1 items-start bg-neutral-900 gap-4 justify-start px-10 py-5 overflow-x-auto">
      {columns.map((column) => (
        <Column name={column.name} id={column.id} key={column.id} />
      ))}
    </main>
  );
};

export default Board;
