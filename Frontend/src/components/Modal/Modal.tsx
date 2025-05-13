import { useAppDispatch } from "../../store/hooks";
import { viewModal } from "../../store/modalSlice";
import ModalTitle from "./ModalTitle";
import ModalDescription from "./ModalDescription";
import ModalCheckList from "./ModalCheckList";
import { setCurrentModalCard } from "../../store/currentBoardCard";
import useModal from "../../hooks/useModal";
import CloseIcon from "../Icons/CloseIcon";

const Modal = () => {
  const dispatch = useAppDispatch();

  const { currentCard } = useModal();

  const handleModal = () => {
    dispatch(viewModal("MODAL_OFF"));
    dispatch(setCurrentModalCard(""));
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      {currentCard ? <div
        className="absolute bg-black w-full h-full -mt-10 bg-opacity-40 flex justify-center items-center"
        onClick={handleModal}
      >
        <div
          className="w-1/2 h-5/6 bg-main-gray relative rounded flex flex-col p-4"
          onClick={stopPropagation}
        >
          <div
            onClick={handleModal}
            className="h-10 w-12 text-2xl font-bold absolute right-4 flex justify-center items-center text-center cursor-pointer rounded-full hover:bg-secondary-gray"
          >
            <CloseIcon></CloseIcon>
          </div>
          <ModalTitle title={currentCard.title} stateValue={currentCard.stateValue} />
          <ModalDescription description={currentCard.description}/>
          <ModalCheckList taskList={currentCard.taskList}/>
          <button className="bg-red-600 rounded w-20 p-2 absolute bottom-2 right-4">Delete</button>
        </div>
      </div> : ''}
    </>
  );
};

export default Modal;
