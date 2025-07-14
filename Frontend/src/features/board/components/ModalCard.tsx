import { X, Check } from "lucide-react";

import { useBoardStore } from "../store/boardsStore";

import { useState } from "react";

import { useTask } from "../../task/hooks/useTask";

export default function ModalCard() {
  const { closeCardModal, currentBoard } = useBoardStore();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const {createTask} = useTask()

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  } 

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
     setDescription(e.target.value)
  }

  const handleSubmit = () => {
    if(currentBoard){
      createTask(title, description, currentBoard.id )
    }
    closeCardModal()
  }

  return (
    <div className="w-screen h-screen absolute bg-neutral-700/50 flex justify-center items-center">
      <section className="bg-neutral-800 relative flex flex-col gap-3 p-2 rounded w-1/3">
        <button
          className="absolute top-2 right-2  hover:cursor-pointer"
          onClick={closeCardModal}
        >
          <X color="white"></X>
        </button>
        <h2 className="text-white font-bold">Create Card</h2>
        <section className="flex flex-col gap-2 mb-4 pb-6">
          <div className="flex gap-4 justify-between">
            <h3 className="text-white">Title</h3>
            <input className="w-1/2 border border-neutral-700 rounded text-white" onChange={handleChangeTitle}></input>
          </div>
          <div className="bg-neutral-700 w-full h-[0.2px]"></div>
          <div className="flex gap-4 justify-between">
            <h3 className="text-white" onChange={handleChangeDescription}>Description</h3>
            <textarea className="w-1/2 border border-neutral-700 rounded text-white resize-none"></textarea>
          </div>
          <div className="bg-neutral-700 w-full h-[0.2px]"></div>
          <div className="flex gap-4 justify-between">
            <h3 className="text-white" onChange={handleChangeDescription}>Type</h3>
            <textarea className="w-1/2 border border-neutral-700 rounded text-white resize-none"></textarea>
          </div>
          <div className="bg-neutral-700 w-full h-[0.2px]"></div>
          <div className="flex gap-4 justify-between">
            <h3 className="text-white" onChange={handleChangeDescription}>Description</h3>
            <textarea className="w-1/2 border border-neutral-700 rounded text-white resize-none"></textarea>
          </div>
        </section>
        <button className="absolute bottom-2 right-2 bg-blue-500 rounded px-4 hover:cursor-pointer" onClick={handleSubmit}>
          <Check color="white" />
        </button>
      </section>
    </div>
  );
}
