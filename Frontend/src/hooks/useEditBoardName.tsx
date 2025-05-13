import axios from "../services/axiosInstance"
import { useAppDispatch } from "../store/hooks"
import { editBoardName } from "../store/boadsNamesSlice"
import { BoardsName } from "../types/storeInterface"

const useEditBoardName = (boardId: string, newName: string) => {
  const dispatch = useAppDispatch()
  const fetchEditName = async() => {
    const res = await axios.put(`/board/${boardId}`, {newBoardName: newName})
    if(res.status === 200){
      const editName: BoardsName = {
        _id: boardId,
        nameBoard: newName
      }
      dispatch(editBoardName(editName))
    }
  }

  return {fetchEditName}
} 

export default useEditBoardName