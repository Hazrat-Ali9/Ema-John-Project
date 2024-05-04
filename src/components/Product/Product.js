import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart} = props;
    const {img , name , seller, ratings, price } = props.product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Menufacturer : {seller}</small></p>
            <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)}  className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;