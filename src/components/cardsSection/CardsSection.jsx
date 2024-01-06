import React from "react";
import RoomCard from "../roomCard/RoomCard";

const CardsSection = () => {
  return (
    <div className="cards_section my-[50px]">
      <div className="boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
        {Array.from({ length: 18 }).map((_, i) => {
          return <RoomCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default CardsSection;
