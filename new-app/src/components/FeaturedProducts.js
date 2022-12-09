import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function FeaturedProducts({products}) {

    const shuffle = (products,num) => {

    const randomArray =[...products].sort(() => Math.random() * products.length);

    return randomArray.slice(0,num)
    }

  return (
    <Container className="my-3 py-3">
      <h3 className="text-center mb-4">Featured Products</h3>
      <Row>
        {products &&
          shuffle(products,6).map((p) => {
            return (
              <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                {<ProductCard product={p} />}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default FeaturedProducts;