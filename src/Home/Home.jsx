import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts= useLoaderData();

    return (
        <div>
            <h1 className='text-7xl text-red-500'>All T-Shirts: {tShirts.length}</h1>
        </div>
    );
};

export default Home;