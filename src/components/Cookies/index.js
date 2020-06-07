import React from 'react'
import './style.css'


export default function Cookies(props) {
    // console.log(props)
    return (
        <div className="col">

            <div className="img-container">
                <img
                    alt={props.name}
                    src={props.image}
                    id={props.id}
                    onClick={() => props.whenClick(props.id)}

                />
            </div>

        </div>

    )
}
