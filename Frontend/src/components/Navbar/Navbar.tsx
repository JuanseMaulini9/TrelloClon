import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthUserContext } from "../../context/authContext";
import useLogout from "../../hooks/useLogout";
const Navbar = () => {
  const {authUser} = useContext(AuthUserContext);
  const {logout} = useLogout()
  
  const handleLogout = async () => {
    await logout()
  }

  return (
    <nav className="bg-main-gray w-full fixed top-0">
      <ul className="flex gap-3 justify-end mr-4 h-10 items-center font-bold text-xl">
        {authUser === '' ? (
          <>
          <li className="hover:underline">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="hover:underline">
              <Link to="/login">Login</Link>
            </li>
          </>
               
        ) : (
          <li>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
