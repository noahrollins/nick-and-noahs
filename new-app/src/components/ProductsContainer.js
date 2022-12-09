import ProductDetail from './ProductDetail'
import ProductFilter from './ProductFilter'
import ProductAddForm from './ProductAddForm'
import CardGroup from 'react-bootstrap/CardGroup';
import ProductCard from './ProductCard';

const ProductsContainer = ({filteredProducts, filter, handleClick, setProducts, products, setCurrentProduct}) =>{



    const productCard = filteredProducts.map((product, index) => {
        return <ProductCard 
        setCurrentProduct={setCurrentProduct}
        key = {product.id}
        id = {product.id}
        title = {product.title}
        description = {product.description}
        category = {product.category}
        image = {product.image}
        rating = {product.rating}
        reviews = {product.reviews}
        price =  {product.price}
        />
      })


    return (
        <div className='container'>
            <ProductAddForm filteredProducts={filteredProducts} setProducts={setProducts} />
            <br></br>
            <ProductFilter handleClick={handleClick} filter={filter} filteredProducts={filteredProducts}/>
            <CardGroup className="card-group">
                {productCard}
            </CardGroup>
        </div>   
        
    )
}
export default ProductsContainer;