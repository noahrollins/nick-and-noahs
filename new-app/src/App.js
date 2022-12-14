import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './components/ProductContainer';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import ProductAddForm from './components/ProductAddForm';
import {Navbar,Nav,NavLink,Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import SingleProductDetails from './components/SingleProductDetails';
import PageNotFound from './components/PageNotFound';

function App() {

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
    <div className="App text-center">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavLink to={"/"} className={"navbar-brand"}>
              Nick & Noah's Knicks-n-Knacks
            </NavLink>
              <Nav >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/products">Knicks-n-Knacks</Nav.Link>
              </Nav>
                <Nav.Link className="navbar-nav ms-auto" as={Link} to="/Cart"><BsCart3/></Nav.Link>
          </Container>
        </Navbar>
          <br />    
    </>
      <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products/*" element={<ProductContainer 
              filteredProducts={filteredProducts} 
              handleClick={handleClick} 
              filter={filter}
              products={products} 
              setProducts={setProducts}
              />}
            />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/cart" element={<Cart products={products}/>}/>
            
        </Routes>
    </div> 
    </div>
  );
}

export default App;
