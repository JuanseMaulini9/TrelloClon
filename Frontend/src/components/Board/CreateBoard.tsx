import { Dispatch } from "react";
import { useState } from "react";
import useNewBoard from "../../hooks/useNewBoard";
import { createBoard } from "../../store/boadsNamesSlice";
import { useAppDispatch } from "../../store/hooks";
import CloseIcon from "../Icons/CloseIcon";

interface Props {
  setNewBoard: Dispatch<boolean>;
}

const CreateBoard = ({ setNewBoard }: Props) => {
  const dispatch = useAppDispatch()
  const [boardName, setBoardName] = useState<string>("");
  const handleBoardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };
  const { newBoardFetch } = useNewBoard(boardName);

  const saveNewBoard = async() => {
    const newBoard = await newBoardFetch();
    if(newBoard){
      console.log(newBoard)
      dispatch(createBoard(newBoard))
    }
    setNewBoard(false);
  };
  const closeNewBoard = () => {
    setNewBoard(false);
  };

  return (
    <div className="mx-1">
      <input
        type="text"
        className="w-full bg-secondary-gray rounded"
        onChange={handleBoardName}
      />
      <section className="flex gap-2 mt-1">
        <button
          onClick={saveNewBoard}
          className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500"
        >
          Save
        </button>
        <button
          onClick={closeNewBoard}
          className="w-20 h-8 flex items-center justify-center font-semibold text-text-main rounded hover:bg-secondary-gray"
        >
          <CloseIcon></CloseIcon>
        </button>
      </section>
    </div>
  );
};

export default CreateBoard;
