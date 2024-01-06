import React from "react";
import "./sidbar.scss";
import { MdOutlineFileUpload } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Sidbar = ({ openSidebar, setOpenSidbar }) => {
  return (
    <div className={`sidbar text-center ${openSidebar && "show"}`}>
      <div
        className="close cursor-pointer"
        onClick={() => setOpenSidbar(false)}
      >
        <IoClose size={25} />
      </div>

      <div className="head py-5 px-2 text-primary border-b borde-[gray]">
        <h2 className="text-[30px] font-semibold">Sidebar</h2>
      </div>
      <div className="links mt-5">
        <NavLink
          to={"/add-room"}
          className={({ isActive }) => (isActive ? "active link" : "link")}
          onClick={() => setOpenSidbar(false)}
        >
          <div className="icon">
            <MdOutlineFileUpload size={30} />
          </div>
          <h4>Upload Room</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidbar;
