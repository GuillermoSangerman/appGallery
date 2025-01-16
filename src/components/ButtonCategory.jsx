import React from 'react'

export function ButtonCategory({ onClick }) {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 md:flex items-center justify-center px-4">
        <button onClick={onClick} className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">ESPACIO</button>
        <button onClick={onClick} className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">PLAYA</button>
        <button onClick={onClick} className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">VIDEO JUEGOS</button>
        <button onClick={onClick} className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md px-3 my-2 text-white">COMIDA</button>
      </div>
    </>
  )
}


