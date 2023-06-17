export const getGifs = async (category) => {
    //El encodeURI permite que renplace los espacios por %20
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1JLlfhgmwm8YJBz8FfCAhs7LT0Y0gesZ`;

    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
    //Esta funcion no regresa los gifs, regresa un promesa que resuelve una coleccion de la imagenes
  };

  //los helpers se utilizan para las funciones que no necesariamente deben de estar dentro del compenente, y en el componente solo dejar el codigo necesario, como es una peticion esta funcion seria mejor menejarla como un helper
  //Son funciones que hacen un trabajo en especifico que reciben argunmentos los procesan y hacen un return, no hace falta que redibujen el state
