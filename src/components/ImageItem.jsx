import React from 'react'

export function ImageItem({ dataApi }) {

    const { farm, id, secret, server, title } = dataApi


    return (
        <>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 h-auto'>
                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />
            </li>
        </>
    )
}
