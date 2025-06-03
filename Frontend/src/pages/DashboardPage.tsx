import Navbar from "../components/navbar/Navbar"
import Board from "../components/board/Board"

const DashboardPage = () => {
  return (<div className="h-screen flex flex-col">
    <Navbar></Navbar>
    <Board></Board>
  </div>)
}

export default DashboardPage