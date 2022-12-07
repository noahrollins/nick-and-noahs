import React from "react";
import {useState} from "react";

function ProductDetail({id, title, description, image, price, category, rating}) {
    

    
    return (
        <li className="product-item" id={id}>
            <div>
                <img
                src={image}
                alt={title}
                />
            </div>
            <div className="product-details" >
                <h1 className="product-name">{title} ${price}</h1>
                <h2 className="product-category">{category}</h2>
                <p className="product-description">{description}</p>
                <p>{rating.rate} stars / {rating.count} ratings</p>
            </div>
        </li>
    )
}



export default ProductDetail;