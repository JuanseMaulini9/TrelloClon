import useDeleteBoard from "../../hooks/useDeleatBoard"
import { useAppDispatch } from "../../store/hooks"
import { deleteBoardName } from "../../store/boadsNamesSlice"
import { setCurrentBoard } from "../../store/currentBoardSlice"

interface Props {
  boardId: string
} 

const BoardHeaderEdit = ({boardId}:Props) => {

  const {fetchDeleteBoard} = useDeleteBoard()
  const dispatch = useAppDispatch()
  const handleClick = async() => {
    const res = await fetchDeleteBoard(boardId)
    if(res.status === 200){
      dispatch(deleteBoardName(boardId))
      dispatch(setCurrentBoard(''))
    }
  }

  return (
    
    <button className="bg-red-700  h-8 font-semibold w-28 text-white rounded hover:bg-red-500" onClick={handleClick}>
      Delete Board
    </button>
    
  )
}

export default BoardHeaderEdit