import {useState, useEffect} from 'react';
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

function App() {
  const [products,setProducts]=useState([])
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(r => r.json())
    .then(products => {
      console.log(products)
      setProducts(products)
    })
  },[])

  const allProducts = products.map(product => {
    return <ProductDetail 
    key = {product.id}
    id = {product.id}
    title = {product.title}
    description = {product.description}
    category = {product.category}
    image = {product.image}
    rating = {product.rating}
    price =  {product.price}
    />
  })


  return (
    <div className="App">
      <ProductsContainer allProducts={allProducts}/>
    </div>
  );
}

export default App;
