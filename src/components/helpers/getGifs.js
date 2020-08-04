export const getGifs = async (category) => {
  // Peticion HTTP
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=OF137jjMuBEVVv8YeM5vsHU5I88v7hY5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, //Pregunta si images === true
    };
  });

  return gifs;
};
