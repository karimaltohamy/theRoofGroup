import React, { useState } from "react";
import { MdOutlineFileUpload, MdOutlineFileDownload } from "react-icons/md";
import "./addPdfRoom.scss";

const AddPdfRoom = () => {
  const [pdf, setPdf] = useState("");
  const [building, setBuilding] = useState("");
  const [floorNumber, setFoorNumber] = useState("");
  const [rooms, setRooms] = useState("");
  const [openRooms, setOpenRooms] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      const pdfObjectUrl = URL.createObjectURL(selectedFile);
      setPdf(pdfObjectUrl);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (openRooms) {
      console.log("req update room");
    } else {
      console.log("req update");
      setOpenRooms(true);
    }
  };

  return (
    <div className="add_pdf_room ">
      <div className="px-4 md:px-8">
        <div className={`section_upload ${!pdf && "h-[500px]"}`}>
          <div className="btns">
            <label htmlFor="pdf" className="btn flex">
              <div className="icon">
                <MdOutlineFileUpload />
              </div>
              <span>Upload PDF</span>
              <input
                type="file"
                id="pdf"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <button className="btn">
              <div className="icon">
                <MdOutlineFileDownload />
              </div>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
        {pdf && (
          <div className="line grid md:grid-cols-4 grid-cols-1 my-5 gap-6">
            <div className="show_pdf md:col-span-3">
              {pdf && (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={pdf} defaultPage={1} />
                </Worker>
              )}
            </div>
            <div className="form_connect_floor">
              <h1 className="title">Connect to floor:</h1>
              <form action="" onSubmit={handleUpdate}>
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
                {openRooms && (
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
                )}
                <button className="btn_submit">Update</button>
              </form>
            </div>
          </div>
        )}

        {pdf && (
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
        )}
      </div>
    </div>
  );
};

export default AddPdfRoom;
