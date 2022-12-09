import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';




const Cart = () => {

    const [cart, setCart] = useState([])

    let yourCart = localStorage.getItem('cart')
    
    // return (
    //   <div>
    //     <Image thumbnail="true" src={product.image}/>
    //     <>{product.title}</>
    //     <>{product.price}</>
    //   </div>
    // )
}


export default Cart