import React from "react";
import "./heading.css"
export default function Heading(props) {
  return (
    <div className="heading">
    <div></div>
      <p>{props.name}</p>
      <div></div>
    </div>
  );
}
