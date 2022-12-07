import {useState, useEffect} from 'react';
import Select from 'react-select'
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductAddForm from './components/ProductAddForm';

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
      <ProductsContainer allProducts={products}/>
      <ProductAddForm products={products} setProducts={setProducts} /> 
    </div>
  );
}

export default App;
