import { Link } from "react-router-dom";

const NavBar = ({ setPage }) => {
  return (
    <>
      <nav className="h-[75px] bg-black w-full flex-shrink-0 flex-grow-0 flex justify-between items-center px-4">
        <div className="text-3xl text-white">LOGO</div>
        <div className="mr-[-30px]">
          <ul className="list-none flex text-white gap-4 mr-[-70px]">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to={"/categories"}>Category</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="list-none flex text-white gap-4">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
            <li>
              <Link to="/login" onClick={() => localStorage.clear()}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
