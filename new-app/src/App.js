import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductAddForm from './components/ProductAddForm';

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
      <ProductsContainer filteredProducts={filteredProducts} handleClick={handleClick} filter={filter}/>
      <ProductAddForm products={products} setProducts={setProducts} /> 
    </div>
  );
}

export default App;
