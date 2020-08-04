import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInLeft">
      <img src={url} alt={title} />
      <p className="some"> {title} </p>
    </div>
  );
};
