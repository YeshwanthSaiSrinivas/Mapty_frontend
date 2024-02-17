import { useState, useEffect } from "react";

import Filterevents from "../components/Filterevents";
import PopularEvents from "../components/PopularEvents";
import AddEvent from "../components/AddEvent";
import MapCont from "../components/MapCont";
import "../css/map.css";
import { showNotification } from "@mantine/notifications";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import axios from "axios";

const Events = () => {
  const [addEvent, setAddEvent] = useState(false);
  const [clickedLat, setClickedLat] = useState(null);
  const [clickedLng, setClickedLng] = useState(null);
  const [show, setShow] = useState(false);
  const [markers, setMarker] = useState([]);
  const [centerLat, setCenterLat] = useState(14.4484);
  const [centerLng, setCenterLng] = useState(79.9888);
  const [events, setEvents] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (eventLat, eventLng) => {
    if (eventLat != null && eventLng != null) {
      setClickedLat(eventLat);
      setClickedLng(eventLng);
      setShow(true);
      setAddEvent(false);
    }
  };

  const addMarkerHandler = (ele) => {
    setMarker([...markers, ...ele]);
  };

  const filterMarkerHandler = (ele) => {
    setMarker(ele);
  };

  const setMapCenterCoords = (lat, lng) => {
    setCenterLat(lat);
    setCenterLng(lng);
  };

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const options = {
          url: "http://localhost:3001/api/event/all-events",
          method: "GET",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios(options);

        if (res.data.status === "success") {
          addMarkerHandler(res.data.data.events);
          setEvents(res.data.data.events);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllEvents();
  }, []);

  return (
    <div>
      <div className="container-fluid " style={{ marginTop: "60px" }}>
        <div className="row pb-4">
          <div className="col-lg-4 aside-container">
            <Filterevents
              filterMarkerHandler={filterMarkerHandler}
              setMapCenterCoords={setMapCenterCoords}
            />
            <div className="text-center " id="add-new-event">
              <button
                type="button"
                className="btn btn-outline-success mt-4 mb-3"
                id="fourthButton"
                onClick={() => {
                  showNotification({
                    title: "To Add a new Event",
                    message: "Click on the map where event take place",
                    icon: <AiOutlineExclamationCircle />,
                    color: "blue",
                    // style: { backgroundColor: "#8CC3A9" },
                    autoClose: 5000,
                  });
                  setAddEvent(true);
                }}
              >
                Create Event
              </button>
            </div>
            <PopularEvents events={events} />
          </div>

          <AddEvent
            lat={clickedLat}
            lng={clickedLng}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            addMarkerHandler={addMarkerHandler}
          />
          <div className="col-lg-8">
            <MapCont
              isAddEvent={addEvent}
              openModal={openModal}
              markers={markers}
              centerLat={centerLat}
              centerLng={centerLng}
              setMapCenterCoords={setMapCenterCoords}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
