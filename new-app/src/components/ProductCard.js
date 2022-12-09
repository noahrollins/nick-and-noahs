import {useState} from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link, Route, Routes } from "react-router-dom";
import "./ProductCard.css";
import ProductFilter from "./ProductFilter";
import ProductContainer from "./ProductContainer";
import ProductDetail from "./ProductDetail";


function ProductCard({ id, title, description, image, price, category, rating, reviews, filteredProducts }) {

  return (
    <>
      <Link
        to={`/products/${id}`}
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
              <br></br>
              {reviews} reviews
            </div>
          </Card.Body>
        </Card>
      </Link>
      <Routes>
        <Route
          path="/product/:id"
          render={({ match }) => (
            <ProductDetail
              product={filteredProducts.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
      </Routes>
    </>
  );
}

export default ProductCard;