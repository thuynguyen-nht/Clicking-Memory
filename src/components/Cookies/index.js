import React from 'react'
import './style.css'


export default function Cookies(props) {
    return (
        <div className="col">

            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.shuffleCards(props.id)} className="shuffle" />
            </div>

        </div>

    )
}
