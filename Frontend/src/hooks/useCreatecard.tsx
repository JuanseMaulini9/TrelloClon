import { useAppDispatch } from "../store/hooks"
import axios from "../services/axiosInstance"
import { TasksInterface } from "../types/storeInterface"
import { createTask } from "../store/boardSlice"

const useCreateCard = () => {
  const dispatch = useAppDispatch()

  const fetchCreateCard = async(stateValue: string, boardId: string) => {
    const res = await axios.post(`/task/createTask`, {stateValue, boardId})
    if(res.status === 201){
      const newTask: TasksInterface = res.data.task
      dispatch(createTask(newTask))
    }
  } 
  return {fetchCreateCard}
}

export default useCreateCard