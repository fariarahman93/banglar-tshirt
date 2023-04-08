import React from 'react';

const Tshirt = ({tShirt,handleAddToCart}) => {
    const {picture,name,price,gender}= tShirt; 
    return (
        <div className='border-2 border-blue-200 border-solid rounded-2xl p-2 flex flex-col justify-center'>
            <img className='h-64 w-full rounded-2xl' src={picture} alt="" />
            <h4 className='mb-2'>{name}</h4>
            <p className='mb-4'>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)} className='mb-3 bg-blue-500 text-white p-2 w-1/2 rounded-lg mx-auto hover:bg-blue-800'>Buy Now</button>
        </div>
    );
};

export default Tshirt;