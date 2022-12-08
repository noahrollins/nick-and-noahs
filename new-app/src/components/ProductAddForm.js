import {useState} from 'react';
import Form from 'react-bootstrap/Form';

function ProductAddForm ({products, setProducts}) {
    const [newProduct,setNewProduct]=useState({})
    const handleSelect = (e) => {
        newProduct.category = e.target.value
        setNewProduct({...newProduct})
        console.log(newProduct)
    }

    const handleChange = (e) => {
        const value= e.target.value
        const name = e.target.name
        setNewProduct({
            ...newProduct,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewProduct({})
        const addNewProduct = {
            
            title:newProduct.title,
            price:Number(newProduct.price),
            description:newProduct.description,
            category:newProduct.category,
            image:newProduct.image,
            rating: 0,
            reviews: 0
        }
        fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title:newProduct.title,
                price:Number(newProduct.price).toFixed(2),
                description:newProduct.description,
                category:newProduct.category,
                image:newProduct.image
            })
        })
        .then(r => r.json())
        .then(newObj => {
            setProducts((products)=> [...products, newObj])    
        })
    }

    
    return(
        <form className='product-form' onSubmit={handleSubmit}>
            <h2>Add A New Product</h2>
            <label htmlFor='image'>Image URL:</label>
            <input onChange={handleChange}name='image'/>
            <label htmlFor='title'>Title</label>
            <input onChange={handleChange}name='title'/>
            <label htmlFor='description'>Description</label>
            <input onChange={handleChange}name='description'/>
            <label htmlFor='price'>Price</label>
            <input onChange={handleChange}name='price'/>
            <label htmlFor='category'>Category</label>
            <Form.Select onChange={handleSelect} aria-label="Default select example" value={newProduct.category}>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </Form.Select>
            {/* <label htmlFor='rating'>Rating</label>
            <input onChange={handleChange}name='rating'/> */}
           
            <input type='submit' value='Add Product'/>
        </form>
    )
}

export default ProductAddForm;