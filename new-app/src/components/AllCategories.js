import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'

const AllCategories = ({filteredProducts, handleClick}) => {
  return (
    <Container>
        <h3 className="text-center mb-4">Browse Categories</h3>
        <Row>
            <Col xs={12} sm={6} md={3} className="mb-2 p-2">
                <CategoryCard category={"Men's Clothing"}/>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-2 p-2">
                <CategoryCard category={"Women's Clothing"}/>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-2 p-2">
                <CategoryCard category={"Jewelry"}/>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-2 p-2">
                <CategoryCard category={"Electronics"}/>
            </Col>
        </Row>
    </Container>
  )
}

export default AllCategories