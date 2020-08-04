import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <div className="divTitle">
        <h2 className="app-title animate__animated animate__backInLeft">
          Gif-App...
        </h2>
        <div className="divSub">
          <h3 className="app-sub animate__animated animate__backInRight">
            By mrLuis
          </h3>
        </div>
      </div>
      <p className="searchTxt">Busca tus gifs favoritos...</p>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
