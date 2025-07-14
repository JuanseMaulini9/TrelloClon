import { useBoardStore } from "../store/boardsStore";

const Header = () => {
  const { currentBoard } = useBoardStore();
  return (
    <section className="bg-neutral-800 p-4">
      {currentBoard ? currentBoard.boardname : ""}
    </section>
  );
};

export default Header;
