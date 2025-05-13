import StateBoard from "./StateBoard";
import NotBoard from "./NotBoard";
import { useAppSelector } from "../../store/hooks";
import useBoardDetail from "../../hooks/useBoardDetail";
import BoardHeader from "./BoardHeader";

const Board = () => {
  
  useBoardDetail() 
  const board = useAppSelector((state) => state.currentBoard.currentBoardId);

  return (
    <>
      {board ? (
        <div className="h-full flex flex-col overflow-hidden">
          <BoardHeader></BoardHeader>
          <div className="h-full bg-secondary-gray flex justify-around gap-16 px-8 pt-8">
            <StateBoard stateBoard="To do"></StateBoard>
            <StateBoard stateBoard="In progress"></StateBoard>
            <StateBoard stateBoard="Done"></StateBoard>
          </div>
        </div>
      ) : (
        <NotBoard></NotBoard>
      )}
    </>
  );
};

export default Board;
