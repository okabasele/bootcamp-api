import React from "react";
import { Link } from "react-router-dom";
import "./../styles/HomePage.css";

function HomePage({ images }) {
  return (
    <>
      <div className="d-flex flex-wrap">
        {images.map((image) => {
          return (
            <div className="meme card text-center mb-3 me-4" key={image.id}>
              <Link to={`/meme/${image.id}`} state={{ data: image }}>
                <img
                  className="card-img-top"
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt=""
                />
                <div class="card-body">
                  <p class="card-text">{image.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
