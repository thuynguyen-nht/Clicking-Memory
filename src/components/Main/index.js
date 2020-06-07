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

    // countClick = () => {

    //     this.setState({ count: this.state.count + 1 })
    // }


    // checkClicked = id => {

    // }


    shuffleCards = () => {
        const cookies = this.state.cookies.sort(() => 0.5 - Math.random());
        // this.countClick();
        this.setState({ cookies })
    }

    whenClick = id => {
        this.shuffleCards();
        console.log(id)
        // const clickedArray = []
        // for (const value of clickedArray) {
        //     if (value === id) {
        //         this.setState({ count: 0 })
        //     } else {
        //         clickedArray.push(id)
        //         this.setState({ count: this.state.count + 1 })
        //     }
        // }
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
                                    whenClick={this.whenClick}
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


