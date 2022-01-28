import React, {useContext} from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype} = useContext(ShopContext) 

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <div className="bsk">
      <ul className='collection basket-list'>
        <li className='collection-item active'>
          Basket
        </li>
        {order.length ? order.map((item) => {
          return (
            <BasketItem key={item.id} {...item} />
          )
        }) : <li className='collection-item'>Basket is empty</li>}
        <li className='collection-item active'>
          Total Price: {totalPrice} <b>$</b>
        </li>
        <i onClick={handleBasketShow} className='material-icons basket-close'>close</i>
      </ul>
    </div>
  )
}

export default BasketList;
