import React from "react";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center mt-32">
        <h1 className="text-7xl font-serif ">
          Intercagram
        </h1>
      </div>
      <div className="flex items-center justify-center my-12">
        <input className="border border-black rounded-s-md text-center my-4 h-11 " placeholder="Search..." type="text" />
        <button className="border border-black rounded-e-md h-11 w-14"> 🔎 </button>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 md:flex items-center justify-center px-4">
        <button className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">ESPACIO</button>
        <button className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">PLAYA</button>
        <button className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">VIDEO JUEGOS</button>
        <button className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">COMIDA</button>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-5xl font-serif">TITULO</h2>
        <span className="m-5 grid gap-8 grid-cols-4 grid-rows-2">
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
          <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" src="https://picsum.photos/200" alt="foto random" />
        </span>
      </div>
    </>
  )
}