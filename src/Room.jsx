import React from "react";
export default function Room(props) {
  return (
    <div className="roomsline">
      <div className="rooms">
        <img className="images" src={props.image} alt="room" />
      </div>
      <div> Title:{props.names}</div>
      <div>Type:{props.type}</div>
      <div>Rating:{props.rating}</div>
      <div>Price:{props.price}</div>
    </div>
  );
}
