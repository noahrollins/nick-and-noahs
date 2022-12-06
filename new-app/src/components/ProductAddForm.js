import {useState} from 'react';
function ProductAddForm ({products, setProducts}) {
    const defaultState ={
        title:'',
        price:'',
        description:'',
        category:'',
        image:''
    }

    const [newProduct,setNewProduct]=useState(defaultState)

        
    
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

        fetch('https://fakestoreapi.com/products',{
            method:'POST',
            headers: { 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:newProduct.title,
                price:newProduct.price,
                description:newProduct.description,
                category:newProduct.category,
                image:newProduct.image,
                rating:newProduct.rating.rate
            }),
            
        })
            .then(r => r.json())
            .then(data =>{
                console.log(data);
                setProducts([...products, data]);
                setNewProduct(defaultState)
            })
        
    }

    return(
        <form className='product-form' onSubmit={handleSubmit}>
            <h2>Add A New ProductAddForm</h2>
            <label htmlFor='image'>Image URL:</label>
            <input onChange={handleChange}name='image'/>
            <label htmlFor='title'>Title</label>
            <input onChange={handleChange}name='title'/>
            <label htmlFor='description'>Description</label>
            <input onChange={handleChange}name='description'/>
            <label htmlFor='price'>Price</label>
            <input onChange={handleChange}name='price'/>
            <label htmlFor='category'>Category</label>
            <input onChange={handleChange}name='category'/>
           
            <input type='submit' value='Add Product'/>
        </form>
    )
}

export default ProductAddForm;