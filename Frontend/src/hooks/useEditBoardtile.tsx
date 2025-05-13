import axios from "../services/axiosInstance"
import { useState}  from "react"

const useEditBoardTitle = () => {
  
  const [newName, setNewName] = useState<string>('')
  const editTitle = async(newTitle: string, boardId: string) => {

    try {
      const res = await axios.put(`/board/${boardId}`, {newBoardName: newTitle})
    if(res.status === 200){
      setNewName(res.data.updatedBoard.nameBoard)
    }
    } catch (error) {
      if(error instanceof Error){
        console.log(error)
      }
    }
  } 

  return {newName, editTitle}
}

export default useEditBoardTitle