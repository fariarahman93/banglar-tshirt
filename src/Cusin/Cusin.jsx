import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children, hasFriend,ring}) => {
    return (
        <div className='p-3 m-5 border-2 border-yellow-600 rounded-lg'>
            <h3>Cousin</h3>
           <p><small>{children}</small></p> 
           {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;