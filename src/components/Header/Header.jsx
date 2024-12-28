import { memo } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-[#f8c958]">
        <div className="container p-5 text-white flex gap-5 text-lg">
          <NavLink to={"/"} className="">
            Login
          </NavLink>
          <NavLink to={"/user"}>User</NavLink>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
