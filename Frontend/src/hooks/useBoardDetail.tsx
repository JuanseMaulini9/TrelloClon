import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import axios from "../services/axiosInstance";
import { setBoard } from "../store/boardSlice";

const useBoardDetail = () => {
  const currentBoard = useAppSelector((state) => state.currentBoard.currentBoardId);
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (currentBoard) {
          const res = await axios.get(`board/find/${currentBoard}`);
          if (res.status === 200) {
            dispatch(setBoard(res.data.board))
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };

    fetchDetails();
  }, [currentBoard, dispatch]);

};

export default useBoardDetail;
