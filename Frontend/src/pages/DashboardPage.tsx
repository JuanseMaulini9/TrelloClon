import Board from "../features/board/components/Board";
import Sidebar from "../components/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar></Sidebar>
      <Board></Board>
    </div>
  );
};

export default DashboardPage;
