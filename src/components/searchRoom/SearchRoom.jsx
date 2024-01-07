import React from "react";
import "./searchRoom.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLocation } from "react-router-dom";

const SearchRoom = () => {
  const { pathname } = useLocation();
  return (
    <div className="search_room mt-4 md:mt-8">
      <div className="content">
        <form>
          {pathname.includes("room-details") && (
            <div className="download">
              <MdOutlineFileDownload size={25} />
            </div>
          )}
          <div className="input">
            <select>
              <option value="">Choose City</option>
              <option value="">cairo</option>
            </select>
          </div>
          <div className="input">
            <select>
              <option value="">Choose Building</option>
              <option value="">cairo</option>
            </select>
          </div>
          <div className="input">
            <select>
              <option value="">Choose Floor</option>
              <option value="">cairo</option>
            </select>
          </div>
          <div className="input">
            <input type="date" />
          </div>
          <div className="input">
            <select>
              <option value="">Tootal Membership</option>
              <option value="">cairo</option>
            </select>
          </div>
          <button className="btn_submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchRoom;
