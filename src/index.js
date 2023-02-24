import React from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import Nav from "./App";

function App() {
  return ( 
  <>
  <Nav/>
  <ReactGlobe height="100vh" width="100vw" />;
  </>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
