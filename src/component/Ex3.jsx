import React from 'react';

const name = 'Pranav P Hunagund';

const number = 100;

const isView = true;

const languages = ['HTML', 'CSS', 'Javascript', 'React'];

const genRandomNum = () => {
    return Math.round(Math.random()*10000)
}

const Ex3 = () => {
    return (
        <div>
            <h1>Variables in const (Arrow function) Component </h1>

            <h2> Name : { name } </h2>
            <hr />

            <h2> Number : { number } </h2>
            <hr />

            <h2> Boolean = { isView ? "True" : "False"} </h2>
            <hr />

            <ul>
                {
                    languages.map((item, index) => {
                        return <li key={index}> { item } </li>
                    })
                }
            </ul>

            <hr />

            <h2> Random Number = { genRandomNum() } </h2>
        </div>
    )
}

export default Ex3;