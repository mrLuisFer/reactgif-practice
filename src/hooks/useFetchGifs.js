// CustomHook son funciones que ayudan con funcionalidades
// Y pueden tener su propio estado
// funcionan como un functional components

import { useState, useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 500);
    });
  }, [category]);

  return state;
};
