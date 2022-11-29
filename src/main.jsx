import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Board from "./component/Board";
import { observe } from "./component/Game";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

observe((knightPostion) =>
  root.render(<Board knightPosition={knightPostion} />)
);
