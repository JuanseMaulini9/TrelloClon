import axios from "../services/axiosInstance";
import { useEffect, useState } from "react";
import { BoardsName } from "../types/storeInterface";

const useBoards = () => {
  const [boardsNames, setBoardsNames] = useState<BoardsName[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await axios.get("board/boardsName");
        if (res.status === 200) {
          setBoardsNames(res.data.boards);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };
    fetchBoards();
  }, []);

  return { boardsNames };
};

export default useBoards;
