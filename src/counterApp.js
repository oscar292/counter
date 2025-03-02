import React, { useState } from 'react';
import PropTypes from "prop-types";
import './index.css';

const CounterApp = ({value=10})=>{
    const [ counter, setCounter ] = useState(value);
    
    const handleAdd = ()=>{
        setCounter(counter + 1);
    }
    
    const handDisminuir = ()=>{
        setCounter(counter -1);
    }

    const handReset = ()=>{
        setCounter(value);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={handReset}>Reset</button>
            <button onClick={handDisminuir}>-1</button>
        </>
    )
}

export default CounterApp;
CounterApp.prototype = {
    value: PropTypes.number
}