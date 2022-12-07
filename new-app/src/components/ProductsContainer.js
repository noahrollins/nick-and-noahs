import ProductDetail from './ProductDetail'

const ProductsContainer = ({allProducts}) =>{

    const productCard = allProducts.map((product, index) => {
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
        {productCard}
        </>
    )
}
export default ProductsContainer;