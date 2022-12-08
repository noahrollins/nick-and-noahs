import ProductDetail from './ProductDetail'
import ProductFilter from './ProductFilter'
import ProductAddForm from './ProductAddForm'

const ProductsContainer = ({filteredProducts, filter, handleClick, setProducts}) =>{



    const productCard = filteredProducts.map((product, index) => {
        return <ProductDetail 
        key = {index}
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
        <>
        <ProductFilter handleClick={handleClick} filter={filter} filteredProducts={filteredProducts}/>
        <ProductAddForm filteredProducts={filteredProducts} setProducts={setProducts} />
        {productCard}
        </>
    )
}
export default ProductsContainer;