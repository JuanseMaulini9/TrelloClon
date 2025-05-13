import axios from "../services/axiosInstance";
import { BoardsName } from "../types/storeInterface";


const useNewBoard = (nameBoard: string) => {

  const newBoardFetch = async () => {
    try {
      const res = await axios.post("/board", { nameBoard: nameBoard });
      if (res.status === 200) {
        const newBoard: BoardsName = res.data;
        return newBoard

      }
    } catch (error) {
      console.log(error);
    }
  };
  return { newBoardFetch };
};


export default useNewBoard;
