import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div className='p-3  border-2 border-yellow-600 rounded-lg'>
            <h3>Father naki!!</h3>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;