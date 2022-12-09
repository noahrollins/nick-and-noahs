import React from "react";
import Button from 'react-bootstrap/Button';
import { BsStarFill } from "react-icons/bs";


function ProductDetail({id, title, description, image, price, category, rating, reviews}) {
    

    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating} / {reviews}</p>
            <Button type="submit">Add to Cart</Button>
        </div>




        // <Card className="card" style={{ width: '18rem' }}>
        //     <Card.Img 
        //     variant="top"
        //     src={image}
        //     alt={title}
        //     />
        //     <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        //         <Card.Text>
        //             {description}
        //         </Card.Text>
        //         <Card.Text>
        //         {rating} <BsStarFill/> / {reviews} Reviews
        //         </Card.Text>
        //         <Button type="submit">Add to Cart</Button>
        //     </Card.Body>
        // </Card>





    )
}

export default ProductDetail;