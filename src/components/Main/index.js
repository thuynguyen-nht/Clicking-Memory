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
        highest: 1,
        comment: ""
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

        const found = clickedArray.some(el => el.id === id);
        if (!found) {
            clickedArray.push({ id })
            this.setState({ count: this.state.count + 1 })
            this.setState({ comment: "You guessed correctly!" })
            if (this.state.count >= this.state.highest) {
                this.setState({ highest: this.state.highest + 1 })
            } else {
                this.setState({ highest: this.state.highest })
            }
        } else {

            console.log("this id already existed")
            this.setState({ comment: "You guessed incorrectly!" })
            this.setState({ count: 0 })
            this.clearArray(clickedArray)
        }
        console.log(clickedArray)

        return clickedArray;

    }

    // highestScore = () => {
    //     var arrayLength = this.add().length
    //     console.log(arrayLength)
    //     // this.setState({ highest: this.state.highest === this.add().length })
    // }

    whenClick = id => {
        this.shuffleCards();
        console.log(id)
        this.add(clickedArray, id)
        // this.highestScore()
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
                        <Comments
                            comment={this.state.comment}
                        />
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


