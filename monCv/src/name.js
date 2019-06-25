import React from "react";

export default function Name(props) {
  return (
    <>
      <h1 style={{ Color: "red" }}>{props.firstName + " " + props.lastName}</h1>
    </>
  );
}
