import AsideButton from "../Board/AsideButton";
import CreateBoard from "../Board/CreateBoard";
import NewBoardButton from "../Board/NewBoardButton";
import { useState, useEffect } from "react";
import useBoards from "../../hooks/useBoards";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setBoardsNames } from "../../store/boadsNamesSlice";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boardsNames);

  const { boardsNames } = useBoards();

  useEffect(() => {
    dispatch(setBoardsNames(boardsNames));
  }, [boardsNames, dispatch]);


  const [newBoard, setNewBoard] = useState(false);

  return (
    <aside className="bg-main-gray w-52 h-full overflow-y-scroll">
      <section className="p-4 flex justify-between">
        <h3 className="text-2xl font-bold">Boards</h3>
        <NewBoardButton setNewBoard={setNewBoard} />
      </section>
      {newBoard && <CreateBoard setNewBoard={setNewBoard} />}
      <section>
        <ul className="flex flex-col py-4 items-center justify-center">
          {boards.boardsNames.map((board) => (
            <AsideButton
              boardName={board.nameBoard}
              _id={board._id}
              key={board._id}
            ></AsideButton>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
