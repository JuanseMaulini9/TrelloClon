import { useAppSelector } from "../store/hooks";
import { BoardsName } from "../types/storeInterface";

const useCurrentBoardName = (currentBoardId: string) => {
  const boards = useAppSelector((state) => state.boardsNames.boardsNames);

  const currentBoard: BoardsName = {
    _id: '',
    nameBoard: ''
  }
  
  const currentBoardName = boards.find((board) => board._id === currentBoardId);
  if (currentBoardName) {
    currentBoard._id = currentBoardName._id
    currentBoard.nameBoard = currentBoardName.nameBoard
  }
  return {currentBoard}
};

export default useCurrentBoardName;
