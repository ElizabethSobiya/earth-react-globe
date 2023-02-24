import React from "react";
import ReactDOM from "react-dom";

import Head from "./App";

function App() {
  return ( 
  <>
  <Head/>
  </>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
