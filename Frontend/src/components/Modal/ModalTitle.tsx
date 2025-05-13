import { useState } from "react";
import useModal from "../../hooks/useModal";
import { TasksInterface } from "../../types/storeInterface";
import { editTask } from "../../store/boardSlice";
import { useAppDispatch } from "../../store/hooks";

interface Props {
  title: string;
  stateValue: string;
}

const ModalTitle = ({ title, stateValue }: Props) => {
  const [editTitle, setEditTitle] = useState(false);
  const [titleState, setTitleState] = useState(title)
  const dispatch = useAppDispatch()
  const {fetchEditTitle} = useModal()

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleState(e.target.value)
  }

  const handleEdit = () => {
    setEditTitle(true);
  };

  const handleSave = async() => {
    setEditTitle(false);
    const res = await fetchEditTitle(titleState)
    if(res.status === 200){
      const taskUpdated: TasksInterface = res.data.update
      dispatch(editTask(taskUpdated))
    } 
  };

  return (
    <section>
      <section className="flex justify-between mr-16">
        {!editTitle ? (<h2 className="text-2xl font-bold  mr-24 overflow-hidden overflow-ellipsis text-text-main">
          {titleState}
        </h2>) : <>
        <input className='w-5/6 mr-4 outline-none bg-secondary-gray text-lg font-bold text-text-main' type="text" value={titleState} onChange={handleTitle}></input>
        </>}
        {!editTitle ? (
          <button
            onClick={handleEdit}
            className="bg-secondary-gray w-20 h-8 font-semibold text-text-main rounded"
          >
            Edit Title
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-secondary-gray w-20 h-8 font-semibold text-text-main rounded"
          >
            Save Title
          </button>
        )}
      </section>

      <section className="flex mt-1 flex-row gap-4">
        <span className="text-sm text-text-secondary">{stateValue}</span>
      </section>
    </section>
  );
};

export default ModalTitle;
