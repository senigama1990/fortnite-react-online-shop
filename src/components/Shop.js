import { useState, useEffect } from 'react'
import { API_URL, API_KEY } from "../config"
import Cart from './Cart'
import GoodList from './GoodsList'
import Loader from './Loader'


function Shop() {

  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    }).then(response => response.json())
      .then(data => {
        data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList goods={goods} />}
    </div>
  )
}

export default Shop;
