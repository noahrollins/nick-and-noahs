import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart([...cart, item]);
  }

  const deleteByIndex = (index) => {
    setCart((prevItems) => {
      return prevItems.filter((_, i) => i !== index);
    });
  };
  return (
    <div className="app">
      <div className="items">
        <button value="MacBook Pro" onClick={addItemToCart}>
          {" "}
          MacBook Pro
        </button>
        <button value="iPhone XS" onClick={addItemToCart}>
          iPhone XS
        </button>
        <button value="Gem" onClick={addItemToCart}>
          {" "}
          Gem
        </button>
        <button value="Teddy Bear" onClick={addItemToCart}>
          {" "}
          Teddy Bear
        </button>
      </div>
      <div className="cart">
        Cart
        <ul className="no-bullets">
          {cart.map((item, index) => {
            return (
              <li key={item}>
                <span>{item}</span>

                <button onClick={() => deleteByIndex(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
