import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money,setMoney]= useContext(MoneyContext)
    return (
        <div className='p-3 m-5 border-2 border-yellow-600 rounded-lg'>
            <h3 >sisi</h3>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Sister;