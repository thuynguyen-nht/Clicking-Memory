import React from 'react'
import Scores from "../Scores"
import Comments from "../Comments"
import Cookies from "../Cookies"


export default function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Scores />
                    <Comments />
                </div>
                <div className="col">
                    <Cookies />
                </div>
            </div>
        </div>
    )
}


