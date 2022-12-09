import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import "./ProductDetails.css";
import { FaPlus, FaMinus } from "react-icons/fa";
//import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
//import { addToCarts } from "../../../Features/Cart/CartSlice";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";

function SingleProductDetails() {
  let { productId } = useParams();
  let [products, setProducts] = useState(null);
  let [quantity, setQuantity] = useState(1);
  //const { products } = useSelector((state) => state.products);

  //const dispatch = useDispatch();

  //increase item quantity
  const increaseQuantity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  //decrease item quantity
  const decreaseQuantity = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

//   //add the item to the cart
//   const addToCart = (e) => {
//     e.preventDefault();
//     let item = {
//       id: parseInt(productId),
//       quantity: quantity,
//       price: product.price,
//     };
//     dispatch(addToCarts(item));
//   };

  //use effect function to find the product from all products
  useEffect(() => {
    let result = products.find((product) => product.id === parseInt(productId));
    setProducts(result);
  }, [productId, products]);

  return (
    <>
      <TopNavbar />
      <Container>
        {ProductCard && (
          <Row className="my-5">
            <Col md={6} sm={12}>
              <div className="img-container p-3">
                <Image className="single-img" src={ProductCard.image} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{ProductCard.title}</h2>
                <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link
                    to={`/category/${ProductCard.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {ProductCard.category}
                  </Link>
                </h4>
                <h4 className="py-2">Price: ${ProductCard.price}</h4>
                <p>{ProductCard.description}</p>
                <div className="d-flex mb-3">
                  <button
                    className="btn btn-sm btn-dark fs-6 me-3 text-center"
                    onClick={decreaseQuantity}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    className="form-control text-center w-auto p-0 m-0"
                    value={quantity}
                    readOnly={true}
                    required={true}
                  />
                  <button
                    className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                    onClick={increaseQuantity}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="">
                  <Button variant="dark" className="me-2">
                    Buy Now
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    //onClick={addToCart}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default SingleProductDetails;