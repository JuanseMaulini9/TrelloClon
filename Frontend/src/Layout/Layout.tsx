import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  
 

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default Layout