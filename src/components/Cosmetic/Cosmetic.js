import React from 'react';
import { addToDb, removeFromDb } from '../../ulitilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCart = (id) =>{
    addToDb(id);
    }
    const addToCartWithParam = () => addToCart(id)

    const removeFromCart = id =>{
       removeFromDb(id);
    }
    return (
        <div className='product'>
           <h2>Buy this:{name}</h2>
           <p>only for:${price}</p>
           <p>id:{id}</p>
           <button onClick={addToCartWithParam}>Add to Cart</button>
           <button onClick={() => addToCart(id)}>Add to Cart(sortcurt)</button>
           <button onClick={() =>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;