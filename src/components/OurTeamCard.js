import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button, Card} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";

<script
  src="https://kit.fontawesome.com/5b8bafe0af.js"
  crossOrigin="anonymous"
></script>;

function OurTeamCard(props) {
  return (
    <div className="text-center">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8Di5Xe-0ty58fzXIdk_2OQHaFj%26pid%3DApi&f=1"
        alt=""
        className="rounded card-img-top"
      />
      <div className="py-3">
        <h4>{props.name}</h4>
        <p className="fs-6">{props.role}</p>
        <div className="my-2 d-flex align-items-center justify-content-center">
          <div style={{ margin: "5px" }}>
            <a
              className="me-2 fa-2xl"
              style={{ color: "black", padding: "10px" }}
              href="https://www.linkedin.com/in/siddharth25pandey/"
            >
              <FaLinkedin size="2em"/>
            </a>
          </div>
          <div style={{ margin: "5px" }}>
            <a
              className="me-2"
              style={{ color: "black" }}
              href="https://github.com/siddharth25pandey"
            >
              <FaGithub size="2em"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamCard;
