import React from 'react';

// All local variables are private

const x = 55;
const title = 'example string title';
const isView = false;

const colors = ['Red', 'Blue', 'Orange'];

const getRandom = () => {
  return Math.round(Math.random()*1000);
}


function Ex1(props) {
    let y = 12;
    return (
        <div>
            <h1>Variables in Functional Component</h1>
                {/* comment message */}
            <h2> variable x = { x } </h2>
            <h2> variable y = { y } </h2>
            <h2> Product = { x*y } </h2>
            <hr />

            <h2> { title } </h2>
            <hr />

            <h2> Boolean = { isView ? "Say True" : "Say False"} </h2>
            <hr />

            <h2>Random Number = { getRandom() } </h2>   
            <hr />

            <ol>
                {
                    colors.map((item, index) => {
                        return (
                            <li key={index}> { item } </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Ex1;