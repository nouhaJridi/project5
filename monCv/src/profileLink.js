import React from "react";

export default function ProfileLink(props) {
  return (
    <>
      {props.lien && (
        <button
          style={{ Color: "blue" }}
          onClick={() => {
            window.location = props.lien;
          }}
        >
          My Facebook
        </button>
      )}
    </>
  );
}
