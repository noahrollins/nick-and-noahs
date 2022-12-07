import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductAddForm from './components/ProductAddForm';
import {Navbar,Nav,Container} from 'react-bootstrap'

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
<<<<<<< HEAD
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
=======
      <ProductsContainer filteredProducts={filteredProducts} handleClick={handleClick} filter={filter}/>
>>>>>>> cc53c728ffc92fc4632c6bb1a71a8fe98da5c4bd
      <ProductAddForm products={products} setProducts={setProducts} /> 
      <ProductsContainer allProducts={products}/>
    </div>
  );
}

export default App;
