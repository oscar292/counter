import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeraApp from './PrimerApp';
import './index.css';

const divRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(divRoot);
root.render(<PrimeraApp saludo="Welcome"/>);