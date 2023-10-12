import React from "react";
import "../css/StoryCard.css";

function StoryCard({ src, p, h5 }) {
  return (
    <div>
      <div class="box">
        <div class="card">
          <div class="image">
            <img
              href="#"
              alt=""
              src={src}
              style={{ height: "100px", width: "260px" }}
            />
          </div>
          <div class="content">
            <h5
              class="card-title"
              style={{ textAlign: "center", color: "rgba(17, 91, 230, 0.712)" }}
            >
              {h5}
            </h5>
            <p class="card-text">{p}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
