import { useBoardStore } from "../../store/boardsStore";

const SelectBoard = () => {
  const { boards } = useBoardStore();

  return (
    <button className="bg-neutral-700 px-5 py-1 rounded-full text-white font-medium hover:cursor-pointer">
      {boards.length ? boards[0]?.boardname : "Create Board"}
    </button>
  );
};

export default SelectBoard;
