import React from "react";
import locationImg from "../images/location.png";

function Card(props) {
  return (
    <div className="card--row">
      <div className="card--img">
        <img src={props.imageUrl}></img>
      </div>
      <div className="card--content">
        <div className="card--title">
          <div className="card--location">
            <img src={locationImg}></img>
            <h2 className="card--city">{props.location}</h2>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card--place">{props.title}</h1>
        </div>

        <span className="card--date">
          {props.startDate}-{props.endDate}
        </span>
        <p className="card--discription">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
