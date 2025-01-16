import React, { useEffect ,useState } from "react";
import { Searchimage } from "./components/Searchimage";
import { ButtonCategory } from "./components/ButtonCategory";
import { ImageList } from "./components/ImageList";

const apiData = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a1925687c90decd9b7f14790d7ebba3&tags=all&tag_mode=all&format=json&nojsoncallback=1&api_sig=3f788458e25ab0236e75e891cae69654"

async function fetchData(url) {

  try {
    const response = await fetch(url);
    const rsJSON = await response.json()

    return rsJSON
  } catch (error) {
    console.error(error)
  }

}

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(apiData)
      .then(rs => setData(rs))
      .catch(error => console.error(error))
  }, [])

  const photos = data.photos
  const arrayPhoto = photos

console.log(arrayPhoto);
  return (
    <>
      <div className="flex items-center justify-center mt-32">
        <h1 className="text-7xl font-serif ">
          Intercagram
        </h1>
      </div>
      <Searchimage 
        data={data}
      />
      <ButtonCategory />
      <ImageList 
       data={data}
       />
    </>
  )
}


//Clave
//715d6b6a597ca5f7356860c0c2f5ea4f
//Secreto
//0d66e01b86f13c8b
//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a1925687c90decd9b7f14790d7ebba3&tags=all&tag_mode=all&format=json&nojsoncallback=1&api_sig=3f788458e25ab0236e75e891cae69654