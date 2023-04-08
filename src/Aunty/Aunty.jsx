import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div className='p-3  border-2 border-yellow-600 rounded-lg'>
            <h3>Aunty!!!</h3>
            <section className='flex'>
                <Cusin>Axim</Cusin>
                <Cusin hasFriend={true} ring={ring}>Nibir</Cusin>
            </section>
        </div>
    );
};

export default Aunty;