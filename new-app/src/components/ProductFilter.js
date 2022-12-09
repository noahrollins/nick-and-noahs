import Form from 'react-bootstrap/Form';


function ProductFilter({allProducts, filter, handleClick}){

    return (
        <div >
        <h2 className="mb-3">Filter Products</h2>
        <Form className="w-25 mx-auto">
            <Form.Select onChange={handleClick} className="form-select">
                <option value="all">Filter Products - All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </Form.Select>
        </Form>
        {filter && <h4 className="mt-3">{filter.toUpperCase()}</h4>}
      </div>
    );
}



export default ProductFilter