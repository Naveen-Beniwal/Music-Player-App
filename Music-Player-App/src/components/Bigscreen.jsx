import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included
import { assets } from "../assets/assets";
import "./Bigscreen.css"; // Make sure to create this CSS file

const Bigscreen = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src={assets.bgs3}
            className="d-block w-100 carousel-img"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to N-Music</h5>
            <p>Click on search to get your songs.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={assets.bgs5}
            className="d-block w-100 carousel-img"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Enjoy the Music</h5>
            <p>We'll introduce new albums section soon.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={assets.bgs4}
            className="d-block w-100 carousel-img"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Embrace the beauty of Music with N-Music</h5>
            <p>
              We are open for getting improvement suggestion so don't hesitate,
              We are a Family!.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Bigscreen;
