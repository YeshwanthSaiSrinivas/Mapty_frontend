import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";

const CustomMarker = ({ position, popupDetail }) => {
  const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
  return (
    <Marker position={position} icon={icon}>
      <Popup className="cycling-popup">
        <Link
          to={`/events/${popupDetail._id}`}
          style={{ textDecoration: "none" }}
        >
          <h5>{popupDetail.name}</h5>
        </Link>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
