import { useBoardStore } from "../../features/board/store/boardsStore";

import BoardItem from "./BoardItem";
import {Plus} from "lucide-react"

const Sidebar = () => {
  const { boards, openCreateModal } = useBoardStore();
  

  const handleCreateBoardTest = () => {
    openCreateModal()
  };

  return (
    <nav className="bg-neutral-800 w-60 text-white p-8 flex flex-col gap-5">
      <div className="text-neutral-500 text-2xl font-bold text-center">
        Logo
      </div>
      <section className="flex flex-col gap-2">
        <section className="flex justify-between items-center">
          <h3 className="font-bold">Boards</h3>{" "}
          <button
            onClick={handleCreateBoardTest}
            className="w-5 p-0.5 font-bold flex justify-center items-center bg-blue-500 rounded-xl hover:cursor-pointer hover:bg-blue-800"
          >
            <Plus size={16} strokeWidth={2.5} /> 
          </button>
        </section>
        <ul className="flex flex-col gap-2">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board}></BoardItem>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Sidebar;
