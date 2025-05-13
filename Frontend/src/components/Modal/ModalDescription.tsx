import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { editTask } from "../../store/boardSlice";
import useModal from "../../hooks/useModal";

interface Props {
  description:string
}

const ModalDescription = ({description}: Props) => {
  const [editDescription, setEditDescription] = useState(false);
  const [descriptionState, setDescriptionState] = useState(description)
  const dispatch = useAppDispatch()
  const {fetchEditDescription} = useModal()

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionState(e.target.value)
  }

  const handleEditDescription = () => {
    setEditDescription(true);
  };

  const handleSaveDescription = async () => {
    setEditDescription(false);
    const res = await fetchEditDescription(descriptionState)
    if(res.status === 200){
      const updateTask = res.data.update
      dispatch(editTask(updateTask))
    }
  };

  const handleCancelDescription = () => {
    setEditDescription(false);
  };

  return (
    <>
      <section className="mt-4 flex justify-between mb-3">
        <h3 className="text-text-main font-bold text-lg">Description</h3>
        {!editDescription && (
          <button
            onClick={handleEditDescription}
            className="bg-secondary-gray w-20 h-8 font-semibold text-text-main rounded"
          >
            Edit
          </button>
        )}
      </section>
      <section>
        {editDescription ? (
          <>
            <textarea className="resize-y w-full h-auto min-h-28 max-h-40 text-text-main p-2 rounded" placeholder="Description..." onChange={handleDescription} value={descriptionState}>

            </textarea>
            <div className="flex gap-3 mb-4">
            <button onClick={handleSaveDescription} className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500">Save</button>
            <button onClick={handleCancelDescription} className="w-20 h-8 font-semibold text-text-main rounded hover:bg-secondary-gray">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p className="w-full h-32 text-text-main">
              {descriptionState}
            </p>
          </>
        )}
      </section>
    </>
  );
};

export default ModalDescription;
