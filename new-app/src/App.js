import {useState, useEffect} from 'react';
import Select from 'react-select'
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductAddForm from './components/ProductAddForm';
import {Navbar,Nav,Container} from 'react-bootstrap'

function App() {
  const [products,setProducts]=useState([])
  useEffect(() =>{
    fetch('http://localhost:3000/products')
    .then(r => r.json())
    .then(products => {
      console.log(products)
      setProducts(products)
    })
  },[])





  return (
    <div className="App">
       <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products>Knick-Knacks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      </Navbar>
    </>
  );
      <ProductAddForm products={products} setProducts={setProducts} /> 
      <ProductsContainer allProducts={products}/>
    </div>
  );
}

export default App;
