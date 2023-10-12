import React from 'react'
import "../css/aboutUsCard.css"
import location from "../images/location.png";
import {button} from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';



function AboutUsCard(props) {
  return (
    // <>
    //     <div className="col-12 col-md-3">
    //         <div className="card">
    //         <div className="front row">
    //             <img alt="" src={props.location} style={{height: "250px"}} decoding="async" data-nimg="fill"
    //             className="w-full rounded-lg card-img-top col"/>
    //             <div className='col'>
    //                 <h5 style={{color:"black"}}>{props.h5}</h5>
    //             </div>
    //         </div>
    //         <div className="back">
    //             <div className="card-body">
    //                 <h5 className="card-title">{props.backh5}</h5>
    //                 <p className="card-text">{props.p}</p>
    //                 <a href="##" className="btn btn-primary">{props.button}</a>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    // </>
    <div>
      <div className="flip-card1">
        <div className="flip-card-inner1">
          <div className="flip-card-front1 row" style={{ padding: "40px" }}>
            <img
              alt=""
              src={props.src}
              style={{ height: "230px", decoding: "async", dataNimg: "fill" }}
              className="w-full rounded-lg card-img-top col"
            />
            <p><b>{props.fronttext}</b></p>
          </div>
          <div className="flip-card-back1 p-3" style={{}}>
            <h2>{props.h2}</h2>
            <p  style={{ marginTop: "20px" ,padding:"15px"}}>{props.p}</p>
            <Button className="primary ">{props.button}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsCard