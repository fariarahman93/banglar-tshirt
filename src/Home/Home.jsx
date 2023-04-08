import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart]= useState([]);

    const handleAddToCart=shirt=>{
        const exists= cart.find(tShirt=> tShirt._id== shirt._id)
        if(exists){
            toast('You have already added this t-shirt!!!!');
        }else{
            const newCart=[...cart,shirt];
            setCart(newCart);
        }
        console.log(cart);
    }
    const handleRemoveFromCart=id=>{
        const remainingCart=cart.filter(tShirt=> tShirt._id!==id);
        setCart(remainingCart);
    }
    return (
        <div className='grid grid-cols-4 gap-2 mt-8'>
            <div className='t-shirt-container col-span-3 grid grid-cols-3 gap-2'>
                {
                    tShirts.map(tShirt => <Tshirt tShirt={tShirt} key={tShirt._id} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className='cart-container '>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;