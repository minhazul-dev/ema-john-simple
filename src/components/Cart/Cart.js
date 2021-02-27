import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i]
        total= total + product.price;
    }
    let shipping = 0;
    if(total>100){
        shipping=12;
    }
//    else if (total>100 ){
//         shipping =12;
//     }
    else if(total>0){
        shipping =0;
    }
    const tax = (total /10).toFixed(2) ;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)} </p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + vat: {tax}</small></p>
            <p>Total Price: {grandTotal}  </p>

        </div>
    );
};

export default Cart;