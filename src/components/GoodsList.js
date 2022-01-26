import GoodItem from "./GoodItem";

function GoodList(props) {
  const { goods = [] } = props

  if (!goods.length) {
    return <h2>Information is not found</h2>
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={ item.id} {...item}/>
      ))}
    </div>
  )
}

export default GoodList;
