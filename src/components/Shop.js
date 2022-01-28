import { useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { API_URL, API_KEY } from "../config"
import { ShopContext } from '../context'
import BasketList from './BasketList'
import Cart from './Cart'
import GoodList from './GoodsList'
import Loader from './Loader'


function Shop() {
  const {setGoods, loading, order, isBasketShow}=useContext(ShopContext)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    }).then(response => response.json())
      .then(data => {
        setGoods(data.featured)
      })
  }, [])

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  )
}

export default Shop;
