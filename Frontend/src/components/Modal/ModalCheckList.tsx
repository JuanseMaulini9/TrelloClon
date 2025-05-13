import { useState } from "react";
import { TaskChecked } from "../../types/storeInterface";
import useModal from "../../hooks/useModal";
import { useAppDispatch } from "../../store/hooks";
import { editTask } from "../../store/boardSlice";

interface Props {
  taskList: TaskChecked[];
}

const ModalCheckList = ({ taskList }: Props) => {
  const [addNewElement, setAddNewElement] = useState(false);
  const [newElementTitle, setNewElementTitle] = useState("");
  const dispatch = useAppDispatch()
  const {fetchEditChecked, progress, fetchingCompletedCheked} = useModal()

  const handleNewElement = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewElementTitle(e.target.value)
  };

  const handleAddNewElement = () => {
    setAddNewElement(true);
  };

  const handleSaveNewElement = async() => {
    setAddNewElement(false);
    const res = await fetchEditChecked(newElementTitle)
    if(res.status === 200){
      dispatch(editTask(res.data.addChecked))
    }
  };

  const handleCancelNewElement = () => {
    setAddNewElement(false);
  };

  const handleChange = async(id: string) => {
    const res = await fetchingCompletedCheked(id)
    if(res.status === 200){
      dispatch(editTask(res.data.editedChecked))
    }
  }

  return (
    <>
      <section className="mt-4 flex justify-between mb-3">
        <h3 className="text-text-main font-bold text-lg">Checklist</h3>
      </section>
      <section className="flex gap-2 items-center mb-2">
        <label className="text-text-secondary text-sm">{progress()}</label>
        <div className="h-2.5 bg-gray-700 rounded-full w-full">
          <div
            className="bg-blue-700 h-2.5 rounded-full"
            style={{ width: progress() }}
          ></div>
        </div>
      </section>
      <section>
        <ul>
          {taskList.map((task) => (         
            <label className="flex gap-2 text-text-main items-center" key={task._id}>
              <input type="checkbox" checked={task.value} onChange={() => handleChange(task._id)} />
              {task.name}
            </label>
          ))}
        </ul>
      </section>
      <section className="mt-4">
        {addNewElement ? (
          <>
            <textarea
              className="resize-y w-full h-auto min-h-10 max-h-20 text-text-main p-2 rounded"
              placeholder="Add an element"
              value={newElementTitle}
              onChange={handleNewElement}
            ></textarea>
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleSaveNewElement}
                className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500"
              >
                Add
              </button>
              <button
                onClick={handleCancelNewElement}
                className="w-20 h-8 font-semibold text-text-main rounded hover:bg-secondary-gray"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={handleAddNewElement}
            className="bg-secondary-gray w-32 h-8 font-semibold text-text-main rounded"
          >
            Add element
          </button>
        )}
      </section>
    </>
  );
};

export default ModalCheckList;
