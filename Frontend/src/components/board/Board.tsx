import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

import Column from "./Column";
import Card from "./Card";

const Board = () => {
  const [items, setItems] = useState({
    "To do": ["A0", "A1", "A2"],
    "In Progress": ["B0", "B1"],
    "Done": [],
  });

  return (
    <main className="flex flex-row flex-1 items-start bg-neutral-900 gap-4 justify-start px-10 py-5 overflow-x-auto">
      <DragDropProvider
        onDragOver={(event) => {
          setItems((items) => move(items, event));
        }}
      >
        {Object.entries(items).map(([column, items]) => (
          <Column key={column} id={column}>
            {items.map((id, index) => (
              <Card key={id} id={id} index={index} column={column} />
            ))}
          </Column>
        ))}
      </DragDropProvider>
    </main>
  );
};

export default Board;
