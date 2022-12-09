import {useState} from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import ProductFilter from "./ProductFilter";
import ProductContainer from "./ProductContainer";



function ProductCard({ id, title, description, image, price, category, rating, reviews }) {
  return (
    <>
      <Link
        to={`/product/${id}`}
        className="text-dark text-decoration-none"
      >
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="py-3 card-img"
            src={image}
          />
          <Card.Body className="text-center">
            <Card.Title className="fs-6">
              {title.slice(0,10)} ...
            </Card.Title>
            <Card.Text className="text-capitalize text-decoration-none fs-6">
              {category}
            </Card.Text>
            <h5>${price}</h5>
            <div className="py-2 d-flex justify-content-center fs-6">
              <ReactStars
                count={5}
                value={reviews}
                isHalf={true}
                emptyIcon={<i className="far fa-start"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              ></ReactStars>
              {`(${rating})`}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default ProductCard;