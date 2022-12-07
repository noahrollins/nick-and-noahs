import React from "react";
import {useState} from "react";

function ProductDetail({id, title, description, image, price, category, rating,reviews}) {
    

    
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
                <h4 className="product-category">{category.toUpperCase()}</h4>
                <p className="product-description">{description}</p>
                {/* Below works to render rate/count from JSON, but breaks on POST request - new products have no rating */}
                <p>{rating} stars / {reviews} reviews</p>
            </div>
        </li>
    )
}



export default ProductDetail;