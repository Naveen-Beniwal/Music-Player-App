import React from "react";

const Card = ({ element }) => {
  return (
    <div className="card">
      <img src={element.image} className="card-img-top" alt={element.name} />
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <p className="card-text">Artist: {element.desc}</p>
        <p className="card-text">Release Date: {element.duration}</p>
        <audio src={element.file} controls className="w-100"></audio>
      </div>
    </div>
  );
};

export default Card;
