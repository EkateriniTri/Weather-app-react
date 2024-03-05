import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Vienna</h1>
      <ul>
        <li>Wednesday 09:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"
              />

              <span className="temperature">9</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 70% </li>
            <li>Wind: 16 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
