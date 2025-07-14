import type { BoardInterface } from "../../types";
import { Ellipsis } from "lucide-react";

import { useBoardStore } from "../../features/board/store/boardsStore";

interface Props {
  board: BoardInterface;
}

const BoardItem = ({ board }: Props) => {
  const { setCurrentBoard } = useBoardStore();

  return (
    <li
      className="group flex justify-between px-2 hover:cursor-pointer hover:bg-neutral-700 rounded"
      key={board.id}
      onClick={() => setCurrentBoard(board)}
    >
      <span>{board.boardname}</span>
      <button className="hidden group-hover:inline hover:cursor-pointer hover:bg-neutral-500 rounded-full m-0.5">
        <Ellipsis />
      </button>
    </li>
  );
};

export default BoardItem;
