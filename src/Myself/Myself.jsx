import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className='p-3 m-5 border-2 border-yellow-600 rounded-lg'>
            <h3 className=''>Myself</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;