import { setCurrentBoard } from "../../store/currentBoardSlice";
import { useAppDispatch } from "../../store/hooks";

interface AsideButtonProps {
  boardName: string;
  _id: string;
}

const AsideButton = ({ _id, boardName }: AsideButtonProps) => {
  const dispatch = useAppDispatch();

  const handleCurrentBoard = () => {
    dispatch(setCurrentBoard(_id));
  };

  return (
    <>
      <li
        className="w-full h-full p-4 flex justify-between hover:bg-secondary-gray cursor-pointer"
        onClick={handleCurrentBoard}
      >
        {boardName}
      </li>
    </>
  );
};
export default AsideButton;
