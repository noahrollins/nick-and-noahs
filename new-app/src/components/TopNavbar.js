import React from 'react'
import {useState, useEffect} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import ProductsContainer from './ProductContainer';



const TopNavbar = () => {
  const [products,setProducts]=useState([])
  const [filter, setFilter] = useState("all")

  const handleClick = (e) => {
    const filterValue = e.target.value
    setFilter(filterValue)
    return (filteredProducts)
}

  const filteredProducts = products.filter((product)=>{
    if (filter === "all"){
      return products
    } else {
      return product.category === filter
    }
  })

  useEffect(() =>{
    fetch('http://localhost:6001/products')
    .then(r => r.json())
    .then(products => {
      console.log(products)
      setProducts(products)
    })
  },[])


  return (
    <>
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Nick-n-Noah's Knicks-n-Knacks</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/ProductsContainer">Knick-Knacks</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
          <br />    
          </div>
      <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/ProductsContainer" element={<ProductsContainer 
              filteredProducts={filteredProducts} 
              handleClick={handleClick} 
              filter={filter}
              products={products} 
              setProducts={setProducts}
              />}
            />
        </Routes>
      </div>
    </>
  )
}

export default TopNavbar;