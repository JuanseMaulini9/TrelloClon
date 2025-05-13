import { Dispatch } from "react"
import useEditBoardName from "../../hooks/useEditBoardName"

interface Props {
  handleEditTitle: boolean
  newBoardName: string
  setHandleEditTitle: Dispatch<boolean>
  boardId: string
}

const BoardHeaderEdit = ({setHandleEditTitle, handleEditTitle, newBoardName, boardId}: Props) => {
  
  const {fetchEditName} = useEditBoardName(boardId, newBoardName)

  const handleEdit = () => {
    setHandleEditTitle(true)
  } 

  const handleSave = async () => {
    await fetchEditName()
    setHandleEditTitle(false)
  } 


  return (
    <>
      {!handleEditTitle ? (<button className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500" onClick={handleEdit}>
      Edit Title
    </button>):(<button className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500" onClick={handleSave}>
      Save title
    </button>)}
    
    </>

    
  )
}

export default BoardHeaderEdit