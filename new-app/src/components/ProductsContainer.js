import ProductDetail from './ProductDetail'
import ProductFilter from './ProductFilter'

const ProductsContainer = ({filteredProducts, filter, handleClick}) =>{



    const productCard = filteredProducts.map((product, index) => {
        return <ProductDetail 
        key = {index}
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
        <>
        <ProductFilter handleClick={handleClick} filter={filter} filteredProducts={filteredProducts}/>
        {productCard}
        </>
    )
}
export default ProductsContainer;