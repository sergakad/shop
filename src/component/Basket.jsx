import { useContext } from "react";
import { ShopContext } from "../context";

function Basket(props) {
  const {example} = useContext(ShopContext);
  console.log(example)

  const totalPrice = props.order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  const PushOrder = (order) => {
    return order.order.map((order) => {
      return (
        <div className="order" id={order.id}>
          <span>{order.name} </span>
          <a href="#!">
            <i
              className="basketControll small material-icons"
              onClick={() => {
                props.orderDecrement({ ...order });
              }}
            >
              chevron_left
            </i>
          </a>
          <span> {order.quantity} шт. </span>
          <a href="#!">
            <i
              className="basketControll small material-icons"
              onClick={() => {
                props.orderIncrement({ ...order });
              }}
            >
              chevron_right
            </i>
          </a>
          <span> x {order.price} руб.</span>
          <span> </span>
          <span> = {order.price * order.quantity} руб.</span>
          <a href="#!">
            <i
              className="basketControll small material-icons right"
              onClick={() => {
                props.deleteToBasket({ ...order });
              }}
            >
              close
            </i>
          </a>
        </div>
      );
    });
  };

  return (
    <div className="windowBasket">
      <h3>Корзина</h3>
      <button className="closeBasket btncard btn " onClick={props.showBasket}>
        Закрыть
      </button>
      <div id="formBasket">
        <PushOrder order={props.order} />
      </div>
      <p id="totalPrice">Общая стоимость: {totalPrice} руб.</p>
      <button className="arrange btncard btn ">Оформить</button>
    </div>
  );
}

export { Basket };
