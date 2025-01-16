import React, { useEffect, useState } from "react";
import { Searchimage } from "./components/Searchimage";
import { ButtonCategory } from "./components/ButtonCategory";
import { ImageItem } from "./components/ImageItem";


export async function fetchData(url) {

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }

}



export default function App() {

  const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a67d222c45114961efdab2ce05e517b&tags=all&tag_mode=all&format=json&nojsoncallback=1&api_sig=bff7bf2cdd75f9322b71b3332f235c12"
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(url)
      .then(data => setData(data.photos.photo))
      .catch(error => console.error(error))
  }, [])



  console.log(data);
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
      <ButtonCategory 
        onClick={setData}
      />

      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-5xl font-serif">TITULO</h2>
        <ul className="m-5 grid gap-8 grid-cols-2 md:grid-cols-4">
        {data &&
          data.map(dataApi =>
            
              <ImageItem
                key={dataApi.id}
                dataApi={dataApi}
              />
           
          )}
           </ul>
      </div>


    </>
  )
}


//Clave
//715d6b6a597ca5f7356860c0c2f5ea4f
//Secreto
//0d66e01b86f13c8b
//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a67d222c45114961efdab2ce05e517b&tags=all&tag_mode=all&format=json&nojsoncallback=1&api_sig=bff7bf2cdd75f9322b71b3332f235c12