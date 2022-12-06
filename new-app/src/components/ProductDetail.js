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
                <div className="product-name">{title} ${price}</div>
                <p className="product-category">{category}</p>
                <p className="product-description">{description}</p>
                <p>{rating.rate} stars / {rating.count} ratings</p>
            </div>
        </li>
    )
}



export default ProductDetail;