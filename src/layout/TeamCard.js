import React from "react";

function TeamCard(props) {
  return (
    <div className="Teamcard">
      <div className="card-front">
        <img src={props.img} height="300px" width="300" alt="..."/>
      </div>

      <div className="card-back">
        <h2>
          {props.Name}
          <br />
          <span>{props.position}</span>
        </h2>

        <div className="social-icons">
          
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
