import React, { Component } from 'react'
import Scores from "../Scores"
import Comments from "../Comments"
import Cookies from "../Cookies"
import cookies from "../../cookies.json"

const clickedArray = [];

class Main extends Component {


    state = {
        cookies,
        count: 0,
        highest: 0
    };

    shuffleCards = () => {
        const cookies = this.state.cookies.sort(() => 0.5 - Math.random());
        // this.countClick();
        this.setState({ cookies })
    }

    clearArray = (clickedArray) => {
        while (clickedArray.length) {
            clickedArray.pop()
        }
        return clickedArray
    }

    add = (clickedArray, id) => {

        // const { length } = clickedArray;
        // const id = length + 1;
        const found = clickedArray.some(el => el.id === id);
        if (!found) {
            clickedArray.push({ id })
            this.setState({ count: this.state.count + 1 })
            this.setState({ highest: this.state.highest + 1 })
        } else {
            console.log("this id already existed")
            this.setState({ count: 0 })
            this.clearArray(clickedArray)
        }
        console.log(clickedArray)
        return clickedArray;

    }

    whenClick = id => {
        this.shuffleCards();
        console.log(id)
        this.add(clickedArray, id)

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Scores
                            count={this.state.count}
                            highest={this.state.highest}
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


