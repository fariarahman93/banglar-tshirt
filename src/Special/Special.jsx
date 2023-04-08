import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti= useContext(RingContext)
    return (
        <div className='p-3 m-5 border-2 border-yellow-600 rounded-lg'>
            <h3>Special</h3>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;