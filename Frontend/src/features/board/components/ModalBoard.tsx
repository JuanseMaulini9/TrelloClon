import { useBoardStore } from "../store/boardsStore";

import { X, Check } from "lucide-react";

import { useState } from "react";

import { useBoard } from "../hooks/useBoard";

const ModalBoard = () => {
  const { closeCreateModal } = useBoardStore();

  const [boardName, setBoardName] = useState("");

  const { createBoard } = useBoard();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(event.target.value);
  };

  const handleCreate = () => {
    createBoard(boardName);
    closeCreateModal()
  };

  return (
    <div className="w-screen h-screen absolute bg-neutral-700/50 flex justify-center items-center">
      <section className="bg-neutral-800 relative flex flex-col gap-3 p-2 rounded">
        <button
          onClick={closeCreateModal}
          className="absolute top-2 right-2  hover:cursor-pointer"
        >
          <X color="white" />
        </button>
        <h2 className="text-white font-bold">Create Board</h2>
        <section className="flex  gap-2 mb-4">
          <input
            type="text"
            className="bg-white rounded px-2"
            placeholder="Board name..."
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 w-10 rounded flex justify-center hover:cursor-pointer hover:bg-blue-600"
            onClick={handleCreate}
          >
            <Check color="white" />
          </button>
        </section>
      </section>
    </div>
  );
};

export default ModalBoard;
