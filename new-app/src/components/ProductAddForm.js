import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Form className='product-form' onSubmit={handleSubmit}>
            <h2>Add A New Product</h2>
            <label className='me-1' htmlFor='image'>Image URL:</label>
            <input className='me-1' onChange={handleChange}name='image'/>
            <label className='me-1' htmlFor='title'>Title:</label>
            <input className='me-1' onChange={handleChange}name='title'/>
            <label className='me-1' htmlFor='description'>Description:</label>
            <input className='me-1' onChange={handleChange}name='description'/>
            <label className='me-1' htmlFor='price'>Price:</label>
            <input className='me-1' onChange={handleChange}name='price'/>
            <br></br>
            <label className='mt-1'htmlFor='category'>Category:</label>
                <Form.Select className='w-25 mx-auto' onChange={handleSelect} value={newProduct.category} >
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </Form.Select>

            <Button type='submit' value='Add Product' className="mt-2 mb-2">Add Product</Button>
            {/* <input type='submit' value='Add Product'/> */}
        </Form>
    )
}

export default ProductAddForm;