import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import About from './components/About';
import ProductAddForm from './components/ProductAddForm';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  const [products,setProducts]=useState([])
  const [filter, setFilter] = useState("")

  const handleClick = (e) => {
    const filterValue = e.target.value
    setFilter(filterValue)
    return (filteredProducts)
}

  const filteredProducts = products.filter((product)=>{
    if (filter === ""){
      return products
    } else {
      return product.category === filter
    }
  })

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
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/products">Knick-Knacks</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
          <br />    
    </>
      <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<ProductsContainer/>}/>
        </Routes>
    </div>
      <ProductsContainer filteredProducts={filteredProducts} handleClick={handleClick} filter={filter}/>
      <ProductAddForm products={products} setProducts={setProducts} /> 
    </div>
  );
}

export default App;
