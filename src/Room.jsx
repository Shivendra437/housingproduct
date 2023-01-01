import React from "react";

export default function Room(props) {
  return (
    <>
      <img src={props.image} alt="room" />
      <div> Title:{props.names}</div>
      <div>Type:{props.type}</div>
      <div>Rating:{props.rating}</div>
      <div>Price:{props.price}</div>
    </>
  );
}
