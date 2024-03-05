import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Katerina Tri and is{" "}
          <a
            href="https://github.com/EkateriniTri/Weather-app-react.git"
            target="_blank">
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
