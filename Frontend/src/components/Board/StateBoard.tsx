import Card from "./Card";
import useMoveTask from "../../hooks/useMoveTask";
import { useAppSelector } from "../../store/hooks";

import useCreateCard from "../../hooks/useCreatecard";

interface StateBoardProps {
  stateBoard: string;
}



const StateBoard = ({ stateBoard }: StateBoardProps) => {
  const board = useAppSelector((state) => state.board); 
  const { moveTask } = useMoveTask(stateBoard);

  const {fetchCreateCard} = useCreateCard()

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");

    const card = board.currentBoard?.tasks.find((card) => card._id === id);
    if (card) {
      if(board.currentBoard?.tasks)
      moveTask(id, board.currentBoard?.tasks);
    }
  };

  const handleCreateCard = async() => {
    if(board.currentBoard)
    await fetchCreateCard(stateBoard.toLocaleLowerCase(), board.currentBoard._id)
  }

  return (
    <div
      className={`bg-main-gray w-5/6 h-5/6 pt-2 rounded relative overflow-scroll shadow-lg `}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <section className="flex justify-between px-4">
      <h3 className="text-text-main text-center font-bold text-lg">{stateBoard}</h3>
      <button className="text-text-secondary hover:text-text-main bg-secondary-gray px-2 rounded" onClick={handleCreateCard}>Add task</button>
      </section>
      {board.currentBoard?.tasks.map((card) =>
        card.stateValue.toLocaleLowerCase() ===
        stateBoard.toLocaleLowerCase() ? (
          <Card
            _id={card._id}
            title={card.title}
            description={card.description}
            expires={card.expires}
            taskList={card.taskList}
            stateValue={card.stateValue}
            boardId={card.boardId}
            key={card._id}
          ></Card>
        ) : (
          ""
        )
      )}
    
    </div>
  );
};

export default StateBoard;
