import { useContext } from "react";
import { ShopContext } from "../context";
import GoodItem from "./GoodItem";


function GoodList() {
  const { goods = [] } = useContext(ShopContext)

  if (!goods.length) {
    return <h2>Information is not found</h2>
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default GoodList;
