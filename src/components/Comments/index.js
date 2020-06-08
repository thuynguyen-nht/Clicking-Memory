import React from 'react'
import "./style.css"

export default function Comments(props) {
    return (
        <div className="comment">
            <h3>{props.comment}</h3>
        </div>
    )
}
