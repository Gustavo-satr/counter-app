import React from 'react';
import ReactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';
    //handleAdd
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
          <h1>CounterApp</h1>
          <h2> { value } </h2>

          <button onClick =  {handleAdd } >+1</button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number = {
    }
}
export default CounterApp;