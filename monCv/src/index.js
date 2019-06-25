import React from "react";
import ReactDOM from "react-dom";

import Photo from "./photo.js";
import Name from "./name.js";
import ProfileLink from "./profileLink";

function App() {
  return (
    <>
      <Photo src="/f.jpg" />
      <Name firstName="nouha" lastName="Jridi" />
      <ProfileLink lien="https://www.facebook.com" />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
