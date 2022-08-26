import React from "react";
import axios from 'axios';

export default function Search() {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow-sm border-0"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Current</button>
            </div>
          </div>
        </form>
        <h1>London</h1>
        <h6>Wednesday 16:00</h6>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="cloudy icon"
                class="main-icon"
              />
              <span className="temperature">19</span>
              <span className="units">
                <a href="#">°C</a> | <a href="#">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure: 0%</li>
              <li>Humidity: 77%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  }

