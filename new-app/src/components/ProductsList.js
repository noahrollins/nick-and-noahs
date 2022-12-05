import ProductDetail from './ProductDetail'

const ProductsList = ({products}) =>{
    return (
        <>
            {products.map(product => {
               return<ProductDetail
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
               />
            })
            }
        </>
    )
}
export default ProductsList;