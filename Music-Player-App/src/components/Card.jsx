import React, { useState } from "react";
import style from "./Card.module.css";
import { assets } from "../assets/assets";

const Card = ({ element, id, carouselImage }) => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  const handleCardClick = () => {
    setIsCarouselVisible(!isCarouselVisible);
  };

  const handleCloseCarousel = () => {
    setIsCarouselVisible(false);
  };

  const carouselImages = [carouselImage] || [];

  return (
    <div>
      <div
        className={`card ${style.crd}`}
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <img src={element.image} className="card-img-top" alt={element.name} />
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <p className="card-text">Artist: {element.desc}</p>
          <p className="card-text">Release Date: {element.duration}</p>
          <audio src={element.file} controls className="w-100"></audio>
        </div>
      </div>

      {isCarouselVisible && (
        <div className={style.carouselOverlay}>
          <div id="carouselExampleIndicators" className="carousel slide  w-75">
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner bg-black ">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    // src={image}
                    src={assets.msbg2}
                    className={"d-block bg-contain"}
                    alt={`Carousel Item ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
            <button
              className={style.closeButton}
              onClick={handleCloseCarousel}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1000,
              }}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
