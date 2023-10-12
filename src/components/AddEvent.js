import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const AddEvent = ({ lat, lng, show, handleClose, addMarkerHandler }) => {
  const currentDate = new Date();

  const year = currentDate.toLocaleString("default", { year: "numeric" });
  const month = currentDate.toLocaleString("default", { month: "2-digit" });
  const day = currentDate.toLocaleString("default", { day: "2-digit" });

  var formattedDate = year + "-" + month + "-" + day;

  const [name, setName] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [hobby, setHobby] = useState("Games");
  const [totalSpot, setTotalSpot] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const username = useSelector((state) => state.username);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("photo", file);
      form.append("name", name);
      form.append("date", date);
      form.append("location", [lat, lng]);
      form.append("hobby", hobby);
      form.append("host", username);
      form.append("description", description);
      form.append("totalSpot", totalSpot);
      const options = {
        url: "https://mapty-server.onrender.com/api/event/create-event",
        method: "POST",
        data: form,
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      };

      const res = await axios(options);
      console.log(res);
      if (res.data.status === "success") {
        addMarkerHandler([res.data.data.newEvent]);
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a event</Modal.Title>
        </Modal.Header>
        <form
          action="#"
          className="form"
          id="form-event--data"
          onSubmit={formSubmitHandler}
        >
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 me-3 pt-1">
                  <label className="form-label" htmlFor="lat">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className=" me-3 pt-1">
                  <label className="form-label" htmlFor="lat">
                    Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className=" me-3 pt-1">
                  <label htmlFor="Select" className="form-label">
                    Select most relevent hobbie
                  </label>
                  <select
                    id="hobbies"
                    className="form-select"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                  >
                    <option>Games</option>
                    <option>coding meetups</option>
                    <option>Mixers</option>
                    <option>political gatherings</option>
                    <option>Major events</option>
                    <option>Educational</option>
                    <option>Friend meetups</option>
                    <option>Travelling</option>
                    <option>Random meetups</option>
                    <option>Hangouts</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="me-3 pt-1">
                  <label className="form-label" htmlFor="lat">
                    Host
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="host"
                    name="host"
                    value={username}
                    required
                    disabled
                  />
                </div>
              </div>

              <div className="row">
                <div className="me-3 pt-1">
                  <label className="form-label" htmlFor="lat">
                    Total Spot
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="total"
                    min="1"
                    name="totalSpot"
                    value={totalSpot}
                    onChange={(e) => setTotalSpot(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="event-description">Event Description</label>
                <textarea
                  className="form-control"
                  id="event-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label>Upload Event Pictures</label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-primary" id="save">
              Save
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddEvent;
