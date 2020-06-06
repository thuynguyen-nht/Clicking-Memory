import React, { Component } from 'react'
import Scores from "../Scores"
import Comments from "../Comments"
import Cookies from "../Cookies"
import cookies from "../../cookies.json"


class Main extends Component {


    state = {
        cookies,
        count: 0
    };

    countClick = (id) => {

        this.setState({ count: this.state.count + 1 })
    }


    shuffleCards = () => {
        const cookies = this.state.cookies.sort(() => 0.5 - Math.random());
        this.countClick();
        this.setState({ cookies })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Scores
                            count={this.state.count}
                        />
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


