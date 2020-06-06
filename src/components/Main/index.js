import React, { Component } from 'react'
import Scores from "../Scores"
import Comments from "../Comments"
import Cookies from "../Cookies"
import cookies from "../../cookies.json"


class Main extends Component {


    state = {
        cookies
    };

    shuffleCards = () => {

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Scores />
                        <Comments />
                    </div>
                    <div className="col">
                        <div className="row">
                            {this.state.cookies.map(cookie => (

                                <Cookies
                                    shuffleCards={this.shuffleCards}
                                    id={cookie.id}
                                    key={cookie.id}
                                    name={cookie.name}
                                    image={cookie.image}
                                />

                            ))}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Main;


