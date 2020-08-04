import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GidGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="textCat animate__animated animate__fadeInDown">
        {category ? category : "Busca Gifs"}
      </h3>
      {loading && (
        <p className="loading animate__animated animate__bounceIn animate__flash animate__slower">
          Cargando...
        </p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GidGrid;
