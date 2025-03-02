import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './counterApp';

const divElemento = document.getElementById('root');
const root = ReactDOM.createRoot(divElemento);
root.render( <CounterApp value={25}/>);