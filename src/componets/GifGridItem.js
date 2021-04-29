import React from 'react'
import '../../node_modules/animate.css';
export const GifGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
