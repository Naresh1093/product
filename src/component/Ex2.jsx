import React, { Component } from 'react';

// All local variables are private

const number1 = 70;
const title = 'example string title';
const isView = false;

const colors = ['Red', 'Blue', 'Orange'];

const getRandom = () => {
  return Math.round(Math.random()*1000);
}

class Ex2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let number2 = 20;
        return (
            <div>
                <h1>Variables in Class component</h1>

                <h2> variable number1 = { number1 } </h2>
                <hr />

                <h2> variable number2 = { number2 } </h2>
                <hr />

                <h2> Product = {number1 * number2 } </h2>
                <hr />

                <h2>Title = {title} </h2>
                <hr />

                <h2> Boolean = { isView ? "Say True": "Say False" } </h2>
                <hr />

                <h2>Random Number = { getRandom() } </h2>   
                <hr />

                <ul>
                    {
                        colors.map((item, index) => {
                            return (
                                <li key={index}>{ item }</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Ex2;