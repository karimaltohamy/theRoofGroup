import React from "react";
import SearchRoom from "../../components/searchRoom/SearchRoom";
import CardsSection from "../../components/cardsSection/CardsSection";

const Home = () => {
  return (
    <div className="home">
      <div className="px-4 md:px-8">
        <SearchRoom />
        <CardsSection />
      </div>
    </div>
  );
};

export default Home;
