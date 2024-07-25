import React from "react";
import Card from "./Card";

const Cards = ({ tracks }) => {
  return (
    <div className="container ">
      <div className="row">
        {tracks.map((element) => (
          <div key={element.id} className="col-lg-3 col-md-6 py-2">
            <Card
              element={element}
              id={element.id}
              carouselImage={element.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
