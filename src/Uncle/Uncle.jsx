import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney]= useContext(MoneyContext)
    return (
        <div className='p-3  border-2 border-yellow-600 rounded-lg'>
            <h3>Uncle</h3>
            <p><small>Grandpa Money: {money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send BDT: 1K </button>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;