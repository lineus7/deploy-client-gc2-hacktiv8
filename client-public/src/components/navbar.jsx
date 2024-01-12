import { Link } from "react-router-dom";

const NavBar = ({ setPage }) => {
  return (
    <>
      <nav className="h-[75px] w-full flex flex-shrink-0 justify-between items-center px-4 bg-black">
        <div className="text-3xl text-white">LOGO</div>
        <div className="">
          <ul className="list-none flex text-white gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
