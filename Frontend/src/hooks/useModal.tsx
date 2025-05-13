import { useAppSelector } from "../store/hooks";
import axios from "../services/axiosInstance";

const useModal = () => {

  const {currentModalCard} = useAppSelector(state => state.currentModalCard)
  const taskList = useAppSelector(state => state.board.currentBoard?.tasks)
  const currentCard = taskList?.find(task => task._id === currentModalCard)
  

  const fetchEditTitle = async(newTitle: string) => {
    const res = axios.put(`/task/editTask`, {
      _id: currentModalCard,
      title: newTitle 
   })
   return res
  }

  const fetchEditDescription = async(newDescription: string) => {
    const res = axios.put(`/task/editTask`, {
      _id: currentModalCard,
      description: newDescription 
   })
   return res
  }

  const fetchEditChecked = async(checkedName: string) => {
    const res = axios.post(`/task/addChecked`, {
      _id: currentModalCard,
      name: checkedName 
   })
   return res
  }

  const progress = () => {
    if (currentCard && currentCard.taskList && currentCard.taskList.length > 0) {
      const completedTasks = currentCard.taskList.filter(task => task.value === true);
      const completedPercent = (completedTasks.length / currentCard.taskList.length) * 100;
      return `${completedPercent}%`;
    }
    return "0%";
  }

  const fetchingCompletedCheked = async(checkedId: string) => {
    const res = await axios.put(`/task/editedChecked`, {taskId:currentModalCard , checkedId: checkedId})
    return res
  }
  
  return {currentCard, fetchEditTitle, fetchEditDescription, fetchEditChecked, progress, fetchingCompletedCheked}
}

export default useModal