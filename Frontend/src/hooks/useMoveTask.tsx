import axios from "../services/axiosInstance";
import { TasksInterface } from "../types/storeInterface";
import { useAppSelector } from "../store/hooks";
import { setMoveTask } from "../store/boardSlice";
import { useAppDispatch } from "../store/hooks";

const useMoveTask = (stateValue: string) => {
  const board = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch()
  const moveTask = async (_id: string, taskCards: TasksInterface[]) => {
    if (!board) return;

    try {
      const res = await axios.put("task/editTask", { _id, stateValue });
      if (res.status === 200) {
        const updatedTaskCard: TasksInterface = res.data.update;
        taskCards = taskCards.map((taskCard) =>
          taskCard._id === _id ? updatedTaskCard : taskCard
        );
        dispatch(setMoveTask(taskCards));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { moveTask };
};

export default useMoveTask;
