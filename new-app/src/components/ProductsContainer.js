import ProductDetail from './ProductDetail'

const ProductsContainer = ({allProducts}) =>{

    const productOptions = [
        { value: 'men\'s clothing', label: 'Men\'s clothing' },
        { value: 'women\'s clothing', label: 'Women\'s clothing' },
        { value: 'electroncs', label: 'Electronics' },
        { value: 'jewelry', label: 'Jewelry' }
      ]
    
      const filteredProducts = allProducts.filter(product => {
        if ( productOptions.value === "electronics") {
          return product.category === "electronics"
        } else if ( productOptions.value === "men\'s clothing") {
          return product.category === "men\'s clothing"
        }  else if ( productOptions.value === "women\'s clothing") {
          return product.category === "women\'s clothing"
        }  else if ( productOptions.value === "jewelry") {
          return product.category === "jewelry"
        }
      })

    return (
        <>
        {allProducts}
        </>
    )
}
export default ProductsContainer;