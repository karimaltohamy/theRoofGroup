import React, { useState } from "react";
import { MdOutlineFileUpload, MdOutlineFileDownload } from "react-icons/md";
import "./addPdfRoom.scss";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import ResizableRect from "react-resizable-rotatable-draggable";

const AddPdfRoom = () => {
  const [pdf, setPdf] = useState("");
  const [building, setBuilding] = useState("");
  const [floorNumber, setFoorNumber] = useState("");
  const [rooms, setRooms] = useState("");
  const [openRooms, setOpenRooms] = useState(false);
  const [rectangles, setRectangles] = useState([
    { id: 1, left: 0, top: 40, width: 100, height: 100, rotateAngle: 0 },
    { id: 2, left: 120, top: 40, width: 100, height: 100, rotateAngle: 0 },
  ]);

  const handleResize = (style, isShiftKey, type, id) => {
    let updatedRectangles = rectangles.map((rect) =>
      rect.id === id
        ? {
            ...rect,
            top: Math.round(style.top),
            left: Math.round(style.left),
            width: Math.round(style.width),
            height: Math.round(style.height),
          }
        : rect
    );

    setRectangles(updatedRectangles);
  };

  const handleRotate = (rotateAngle, id) => {
    let updatedRectangles = rectangles.map((rect) =>
      rect.id === id ? { ...rect, rotateAngle } : rect
    );

    setRectangles(updatedRectangles);
  };

  const handleDrag = (deltaX, deltaY, id) => {
    let updatedRectangles = rectangles.map((rect) =>
      rect.id === id
        ? { ...rect, left: rect.left + deltaX, top: rect.top + deltaY }
        : rect
    );

    setRectangles(updatedRectangles);
  };

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
        {!openRooms && (
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
        )}
        {openRooms && (
          <div className="section_shaps">
            <button className="btn">
              <div className="icon">
                <MdOutlineFileDownload />
              </div>
              <span>Download PDF</span>
            </button>
            <div className="shaps relative">
              {rectangles &&
                rectangles.map((rect) => (
                  <ResizableRect
                    key={rect.id}
                    left={rect.left}
                    top={rect.top}
                    width={rect.width}
                    height={rect.height}
                    rotateAngle={rect.rotateAngle}
                    zoomable="n, w, s, e, nw, ne, se, sw"
                    onRotate={(rotateAngle) =>
                      handleRotate(rotateAngle, rect.id)
                    }
                    onResize={(style, isShiftKey, type) =>
                      handleResize(style, isShiftKey, type, rect.id)
                    }
                    onDrag={(deltaX, deltaY) =>
                      handleDrag(deltaX, deltaY, rect.id)
                    }
                    style={{ zIndex: 10000 }}
                  />
                ))}
            </div>
          </div>
        )}
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
