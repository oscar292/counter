import React, { useState } from 'react';
import PropTypes from "prop-types";
import './index.css';

const CounterApp = ({value})=>{
    const [ counter, setCounter ] = useState(10);
    //handleAdd
    const handleAdd = (e)=>{
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}

export default CounterApp;
CounterApp.prototype = {
    value: PropTypes.number
}