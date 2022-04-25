import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( { value } ) => {

    const [counter, setCounter] = useState(0);

    //handleAdd
    const handleAdd = () => {
        setCounter (counter + 1 );
    }

      //Quitar
      const putOff = () => {
        setCounter (counter - 1);
    }

    //Resetear
    const reset = () => {
        setCounter (counter - counter);
    }

    return (
        <>
          <h1>CounterApp</h1>
          <h2> { counter } </h2>

          <button onClick =  { handleAdd } >+1</button>
          <button onClick = {reset}>Reset</button>
          <button onClick = {putOff}>-1</button>

        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number = {
    }
}
export default CounterApp;