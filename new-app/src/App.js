import {useState, useEffect} from 'react';
import './App.css';

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
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
