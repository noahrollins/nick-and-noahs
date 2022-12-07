import Form from 'react-bootstrap/Form';


function ProductFilter({allProducts, filter, handleClick}){

    return (
        <div>
        <h2 className="mb-3">Filter Products</h2>
        <Form.Select onChange={handleClick} aria-label="Default select example">
            <option value="all">Filter Products - All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </Form.Select>
       
       
       
       
        {/* <select onChange={handleClick} className="form-select">
          <option value="">
            Filter Items - All
          </option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select> */}
        {filter && <h4 className="mt-3">{filter.toUpperCase()}</h4>}
      </div>
    );
}



export default ProductFilter