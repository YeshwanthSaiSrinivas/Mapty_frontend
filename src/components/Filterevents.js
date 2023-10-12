import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import axios from "axios";
import { showNotification } from "@mantine/notifications";

const Filterevents = ({ filterMarkerHandler, setMapCenterCoords }) => {
  const [hobby, setHobby] = useState("Games");
  const [city, setCity] = useState("");

  const hobbyEventHandler = async (e) => {
    try {
      e.preventDefault();
      const options = {
        url: `https://mapty-server.onrender.com/api/event/get-event-by-hobby/${hobby}`,
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(options);
      if (res.data.status === "success") {
        filterMarkerHandler(res.data.data.eventByHobby);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const forwardGeocodeHandler = async (e) => {
    try {
      e.preventDefault();
      const string = `http://api.positionstack.com/v1/forward?access_key=fc9a1ebd02ce67ca55a38e4143527ec3&query=${city}`;
      const options = {
        url: string,
        method: "GET",
      };
      const res = await axios(options);
      const { latitude, longitude } = res.data.data[0];
      setMapCenterCoords(latitude, longitude);
    } catch (err) {
      showNotification({
        title: "Error",
        message: "API service is not available currently",
        color: "red",
        autoClose: 5000,
        style: { textTransform: "capitalize" },
      });
    }
  };

  return (
    <div>
      <div className="row first-row">
        <div className="col">
          <div className="card">
            <div className="card-body" style={{ height: "30vh" }}>
              <h5 className="card-title">Filter events</h5>
              <span className="card-text">
                <Tabs
                  defaultActiveKey="hobbies"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="hobbies" title="Search By Hobbies">
                    <div className="mb-3">
                      <form onSubmit={hobbyEventHandler}>
                        <label htmlFor="Select" className="form-label">
                          Select your hobbies
                        </label>
                        <select
                          id="hobbies-select"
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
                        <button
                          className="btn btn-outline-success mt-4"
                          type="submit"
                        >
                          Find
                        </button>
                      </form>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Search By City Name">
                    <div className="d-flex align-items-end justify-content-center">
                      <form onSubmit={forwardGeocodeHandler}>
                        <div className="flex-grow-1 me-3">
                          <label className="form-label" htmlFor="lat">
                            City name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="lat"
                            name="firstname"
                            placeholder="city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                        <button
                          className="btn btn-outline-success mt-4"
                          type="submit"
                        >
                          Find
                        </button>
                      </form>
                    </div>
                  </Tab>
                </Tabs>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterevents;
