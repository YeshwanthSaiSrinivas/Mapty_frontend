import React from "react";
import "../css/flipCard.css";

function FlipCard(props) {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner ">
          <div className="flip-card-front" style={{ padding: "40px" }}>
            <img
              alt=""
              src={props.src}
              style={{ height: "250px", decoding: "async", dataNimg: "fill" }}
              className="w-full rounded-lg card-img-top"
            />
          </div>
          <div className="flip-card-back p-3" style={{}}>
            <h2>{props.h2}</h2>
            <p style={{ marginTop: "20px" }}>{props.p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
