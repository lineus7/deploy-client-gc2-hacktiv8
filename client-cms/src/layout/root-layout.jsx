import { Outlet } from "react-router-dom";
import NavBar from "../components/nav-bar";

export const RootLayout = () => {
  return (
    <>
      <div
        className="h-[100%] min-h-[100vh] w-[100%] min-w-[100vh] bg-amber-100 flex flex-col tracking-tight"
        id="body"
      >
        {/* NAVBAR */}
        <NavBar />

        {/* BODY */}
        <div className="h-[100%] min-h-[100vh] w-[100%] min-w-[100vh] bg-amber-100 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
