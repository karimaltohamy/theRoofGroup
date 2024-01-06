import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import AddPdfRoom from "./pages/addPdfRoom/AddPdfRoom";
import RoomDetails from "./pages/roomDetails/RoomDetails";
import Header from "./components/header/Header";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-room" element={<AddPdfRoom />} />
        <Route path="/room-details/:id" element={<RoomDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
