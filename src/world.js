import React, { useContext, createContext } from 'react';
import ValueContext from './ValueContext';

function World(props) {
    let value = useContext(ValueContext);
    return(
        <div>
            Child No:{value}
        </div>
    );
};

export default World;