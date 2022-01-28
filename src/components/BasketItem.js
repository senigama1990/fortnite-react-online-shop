import React from 'react';
import { useContext } from "react"
import {ShopContext} from "../context"

function BasketItem(props) {
  const { id, name, price, quantity } = props
  const { incrementQuantity, decrementQuantity, removeFromBasket} = useContext(ShopContext)
  return (
    <li className='collection-item'>
      {name} x{quantity} = {price * quantity}<b>$</b>
      <span className='secondary-content'>
        <a onClick={() => incrementQuantity(id)} className='waves-effect waves-light btn btnq'>
          <i className='material-icons left'>exposure_plus_1</i>
        </a>
        <a style={{ marginLeft: 10 }} onClick={() => decrementQuantity(id)} className='waves-effect waves-light btn btnq'>
          <i className='material-icons left'>exposure_minus_1</i>
        </a>
        <i onClick={() => removeFromBasket(id)} className='material-icons basket-delete'>delete_forever</i>
      </span>
    </li>
  )
}

export default BasketItem;
