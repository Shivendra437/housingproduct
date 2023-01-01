import React from "react";

export default function Room(props) {
  return (
    <>
      <div>{props.names}</div>
      <div>{props.type}</div>
      <div>{props.rating}</div>
      <div>{props.price}</div>
      <img src={props.image} alt="room" />
    </>
  );
}
