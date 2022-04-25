import React from 'react';
import PropTypes from 'prop-types';

//import React, { Fragment } from 'react';

    const PrimeraApp = ( { saludo, subtitulo } ) => {
    
    
        return (
            <>
                <h1> {saludo} </h1>
                {/* JSON.stringify(saludo, null, 3)*/ } 
                <p>{ subtitulo }</p>
            </>
        );
    
    @@ -21,4 +21,8 @@ PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
    }
    
    PrimeraApp.defaultProps = {
        subtitulo: 'Soy un subtitulo'
    }
    
    export default PrimeraApp; 