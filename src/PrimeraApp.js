import React from 'react';
import PropTypes from 'prop-types';

//import React, { Fragment } from 'react';

const PrimeraApp = ( { saludo } ) => {



    return (
        <>
@@ -16,4 +17,8 @@ const PrimeraApp = ( {saludo = 'Hola mundo'} ) => {

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp; 