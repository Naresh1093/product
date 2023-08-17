import React from 'react';

// All local variables are private

const x = 120;
const title = "Javascript is scripting language";
const isView = false;

const colors = ['Green', 'Red', 'Blue', 'Orange'];

const getRandom = () => {
    return Math.round(Math.random()*100000)
}

const Ex4 = function (props) {
    return (
        <div>
            <h1>React Const local function Component</h1>

            <h2> variable x = { x } </h2>
            <hr />

            <h2> Title = { title } </h2>
            <hr />

            <h2> Boolean = { isView ? "Good Morning" : "Good Evening" } </h2>
            <hr />

            <h2> Random = { getRandom() } </h2>
            <hr />

            <ol>
                {
                    colors.map((item, index) => {
                        return <li key={index}> { item } </li>
                    })
                }
            </ol>
        </div>
    )
}

export default Ex4;