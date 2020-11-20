import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

import './cart.css';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  console.log(cart);

  const cartTotal = useMemo(() => {
    if (cart.length > 0) {
      const subtotals = cart.map(item =>  item.product.price * item.quantity);
      const total = subtotals.reduce((acc: number, subtotal) => {
        return acc + subtotal
      });
      return total.toFixed(2);
    } else {
      return 0;
    }
  }, [cart])

  return(
    <div className="cart-content-wrapper">
      <h1>{'<'}Cart{'/>'}</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>${item.product.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>${cartTotal}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
