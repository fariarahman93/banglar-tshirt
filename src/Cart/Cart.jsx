import React from 'react';
const Cart = ({ cart, handleRemoveFromCart }) => {
    let msg;
    if (cart.length === 0) {
        msg = <div>Add T-Shirts</div>;
    } else {
        msg = <div> <h3>Borolokz</h3>
            <p><small>thanks for wasting your money!</small></p>
        </div>;
    }
    const cartColor= cart.length!==0?'text-white text-2xl bg-blue-500':'';
    return (
        <div>
            <h3 className={cartColor}>View Cart: {cart.length}</h3>
            <p className={`font-bold border-2 ${cart.length===3?'bg-yellow-300': 'bg-pink-300'}`}>Something naki</p>
            { cart.length>2? 
            <span>aro kino bhai</span>
            : <span>fokira bhai</span> }
            {msg}
            {
                cart.map((tShirt, idx) => <p key={idx}>{tShirt.name} <button onClick={() => handleRemoveFromCart(tShirt._id)}>x</button></p>)
            }
            {
                cart.length===2 && <p>double dhamaal!!!</p>
            }
            {
                cart.length ===3 || <h3>3 ta na</h3>
            }
        </div>
    );
};

export default Cart;

