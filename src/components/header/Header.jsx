import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import "./header.scss";
import Sidbar from "../sidebar/Sidbar";

const Header = () => {
  const [openSidebar, setOpenSidbar] = useState(false);
  return (
    <header className="py-1 px-4 md:py-2 md:px-8">
      <div
        className="content flex items-center gap-3 cursor-pointer"
        onClick={() => setOpenSidbar(true)}
      >
        <div className="icon">
          <IoIosMenu size={35} />
        </div>
        <h4 className="text-[20px] md:text-[28px] font-semibold">Floor map</h4>
      </div>

      {openSidebar && <div className="overflow"></div>}
      <Sidbar openSidebar={openSidebar} setOpenSidbar={setOpenSidbar} />
    </header>
  );
};

export default Header;
