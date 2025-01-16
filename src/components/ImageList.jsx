import React from 'react'

export function ImageList({data}) {

    // const arrayImage = arrayPhoto
    

    //  arrayPhoto.map(img => {
    //     const id = img.id 
    //     const farm = img.farm
    //     const server = img.server
    //     const secret = img.secret
    //     console.log(id, farm, server, secret);
    // })

//`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-4">
                <h2 className="text-5xl font-serif">TITULO</h2>
                <span className="m-5 grid gap-8 grid-cols-2 md:grid-cols-4">
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
