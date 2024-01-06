import React from "react";
import "./roomCard.scss";
import { Link } from "react-router-dom";

const RoomCard = () => {
  return (
    <Link to={"/room-details/3"} className="room_card ">
      <div className="flex items-center justify-between gap-4">
        <div className="text">
          <p className="text-[17px] md:text-[20px] mb-1 md:mb-2">
            Total rooms: <span className="font-semibold">25</span>
          </p>
          <p className="text-[17px] md:text-[20px]">
            Total Available: <span className="font-semibold">5</span>
          </p>
        </div>
        <h5 className="text-[45px] md:text-[60px] font-semibold text-primary">
          1
        </h5>
      </div>
    </Link>
  );
};

export default RoomCard;
