import React, { useState } from "react";
import SearchRoom from "../../components/searchRoom/SearchRoom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "./roomDetails.scss";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";

const RoomDetails = () => {
  const [pdf, setPdf] = useState("");
  const [building, setBuilding] = useState("");
  const [floorNumber, setFoorNumber] = useState("");
  const [rooms, setRooms] = useState("");

  return (
    <div className="room_details">
      <div className="px-4 md:px-8">
        <SearchRoom />
        <div className="line grid md:grid-cols-4 grid-cols-1 my-5 gap-6">
          <div className="show_pdf md:col-span-3">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl={
                  "https://www.cambridgeenglish.org/images/84669-pet-vocabulary-list.pdf"
                }
                defaultPage={1}
              />
            </Worker>
          </div>
          <div className="form_connect_floor">
            <form action="">
              <h1 className="title">Connect to floor:</h1>
              <div className="input_item">
                <label htmlFor="">Select Building</label>
                <select
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                >
                  <option value="">Choose Building</option>
                  <option value="">Build 1</option>
                </select>
              </div>
              <div className="input_item">
                <label htmlFor="">Floor Number</label>
                <select
                  value={floorNumber}
                  onChange={(e) => setFoorNumber(e.target.value)}
                >
                  <option value="">Choose Floor</option>
                  <option value="">floor 1</option>
                </select>
              </div>
              <div className="input_item">
                <label htmlFor="">Select room</label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                >
                  <option value="">select room</option>
                  <option value="">room 1</option>
                </select>
              </div>
              <div className="input_item">
                <label htmlFor="">Memership</label>
                <input type="text" value={"5"} />
              </div>
              <div className="input_item">
                <label htmlFor="">Monthly rent / Month $:</label>
                <input type="text" value={"5"} />
              </div>
              <div className="radios flex items-center justify-center gap-3 my-3">
                <div className="input_radio">
                  <label htmlFor="rented">Rented</label>
                  <input type="radio" id="rented" name="radio-if-vacant" />
                </div>
                <div className="input_radio">
                  <label htmlFor="vacant">Vacant</label>
                  <input type="radio" id="vacant" name="radio-if-vacant" />
                </div>
              </div>

              <p className="date_available font-semibold md:text-[18px]">
                Available from:{" "}
                <span className=" font-medium text-gray-500"> 1Feb,2024</span>
              </p>

              <div className="images flex items-center gap-3 justify-center">
                <div className="image">
                  <img src={icon1} alt="img-icon" loading="lazy" />
                </div>
                <div className="image">
                  <img src={icon2} alt="img-icon" loading="lazy" />
                </div>
                <div className="image">
                  <img src={icon3} alt="img-icon" loading="lazy" />
                </div>
                <div className="image">
                  <img src={icon4} alt="img-icon" loading="lazy" />
                </div>
              </div>

              <button className="btn_submit">Book the Room</button>

              <div className="info mt-5">
                <h1 className="title">Contract details:</h1>
                <div className="input_item">
                  <label htmlFor="">Customer name:</label>
                  <input type="text" placeholder="write customer name" />
                </div>
                <div className="input_item">
                  <label htmlFor="">Contract start date:</label>
                  <input type="date" />
                </div>
                <div className="input_item">
                  <label htmlFor="">Contract end date:</label>
                  <input type="date" />
                </div>
                <div className="input_item">
                  <label htmlFor="">Contract SQM:</label>
                  <input type="text" placeholder="write contract SQM" />
                </div>
                <div className="input_item">
                  <label htmlFor="">Monthly rent $:</label>
                  <input type="text" placeholder="write Monthly rent" />
                </div>
                <div className="input_item">
                  <label htmlFor="">Discount $:</label>
                  <input type="text" placeholder="write Discount" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="table_container my-5 ">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Total area</th>
                <th>Rentable area</th>
                <th>Rented area</th>
                <th>% of rentable area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Private office</td>
                <td>10</td>
                <td>20</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Private office</td>
                <td>10</td>
                <td>20</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Private office</td>
                <td>10</td>
                <td>20</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Private office</td>
                <td>10</td>
                <td>20</td>
                <td>10</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
