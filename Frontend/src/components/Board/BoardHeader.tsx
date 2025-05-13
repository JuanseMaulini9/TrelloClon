import BoardHeaderEdit from "./BoardHeaderEdit";
import  { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import useCurrentBoardName from "../../hooks/useCurrentBoardName";
import BoardHeaderDelete from "./BoardHeaderDelete";


const BoardHeader = () => {
  
  const {currentBoardId} = useAppSelector(state=> state.currentBoard)

  const {currentBoard} = useCurrentBoardName(currentBoardId)

  const [newBoardName, setNewBoardName] = useState(currentBoard.nameBoard)  
  
  const [handleEditTitle, setHandleEditTitle] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.target.value)
  }

  return (
    <div className="bg-main-gray py-2 px-8 flex items-center justify-between ">
      {!handleEditTitle ? (
        <h2 className="font-bold text-lg text-text-main">
          {currentBoard?.nameBoard}
        </h2>
      ) : (
        <input className='w-full mr-4 outline-none bg-secondary-gray text-lg font-bold text-text-main' type="text" value={newBoardName} onChange={handleChange}></input>
      )}
      <div className="flex gap-2">
        <BoardHeaderEdit handleEditTitle={handleEditTitle} setHandleEditTitle={setHandleEditTitle} newBoardName={newBoardName} boardId={currentBoard._id}></BoardHeaderEdit>
      <BoardHeaderDelete boardId={currentBoard._id}></BoardHeaderDelete>
      </div>
      
    </div>
  );
};

export default BoardHeader;
