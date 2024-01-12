import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

export const RootLayout = () => {
  return (
    <>
      <div
        className="min-h-[100vh] h-full min-w-[100vh] w-full bg-amber-100 flex flex-col tracking-tight"
        id="body"
      >
        <NavBar />

        {/* BODY */}
        <div className="grow bg-amber-100">
          <Outlet />
        </div>
        {/* END OF BODY */}
      </div>
    </>
  );
};
