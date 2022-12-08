import {useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';

function ProductAddForm ({products, setProducts}) {
    const defaultState ={
        title:'',
        price:'',
        description:'',
        category:'electronics',
        image:''
    }

    const [newProduct,setNewProduct]=useState(defaultState)
    // const [rate, setRate] = useState(0)
    // const [count, setCount] = useState(0)
    
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

        const addNewProduct = {
            
            title:newProduct.title,
            price:parseInt(newProduct.price),
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
                price:parseFloat(newProduct.price),
                description:newProduct.description,
                category:newProduct.category,
                image:newProduct.image
            })
        })
        .then(r => r.json())
        .then(newObj => {
            setProducts((prev)=> [...prev, newObj])    
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
                <option value="jewelery">Jewelery</option>
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