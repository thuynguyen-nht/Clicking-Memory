import React from 'react'
import './style.css';

export default function Scores(props) {
    return (
        <div className="scores">
            <h2>Your scores:</h2>
            <h1>{props.count}</h1>
            <h3>Highest scores: <span>{props.highest}</span></h3>
        </div>
    )
}
