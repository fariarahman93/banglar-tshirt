import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'diamond';
    const [money,setMoney]= useState(0);
    return (
        <div className='p-3 m-5 border-2 border-yellow-600 rounded-lg'>
            <h2>Grandpa !!</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex justify-center items-center gap-4'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;