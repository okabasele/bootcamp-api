import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomePage.css"

function HomePage({ images }) {
  return (
    <>
      <div className="flex-wrap">
        {images.map((image) => {
          return (
            <div className="image" key={image.id}>
              <Link to={`/meme/${image.id}`} state={{ data: image }}>
                <p>{image.name}</p>
                <img
                className="border"
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
