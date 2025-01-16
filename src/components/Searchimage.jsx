import React from 'react'

export function Searchimage({data}) {
  return (
    <div className="flex items-center justify-center my-12">
        <input className="border border-black rounded-s-md text-center my-4 h-11 " placeholder="Search..." type="text" />
        <button className="border border-black rounded-e-md h-11 w-14"> 🔎 </button>
      </div>
  )
}
