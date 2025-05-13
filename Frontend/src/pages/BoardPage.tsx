import Board from "../components/Board/Board";
import { useAppSelector } from "../store/hooks";
import Modal from "../components/Modal/Modal";
import SideBar from "../components/Aside/SideBar";

const BoardPage = () => {
  const modalView = useAppSelector((state) => state.viewModal);

  return (
    <div className="flex h-screen pt-10 overflow-hidden">
      <SideBar></SideBar>
      <section className="flex-1 overflow-auto">
        <Board></Board>
      </section>
      {modalView ? <Modal></Modal> : ""}
    </div>
  );
};

export default BoardPage;
