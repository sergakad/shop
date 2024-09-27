import {useState} from "react";


function Basket(props) {
    const [sum, setSum] = useState(0);

    const PushOrder = order => {
        return order.order.map(order => {
            return <div className='order' id={order.id}>
                    <span>{order.name}</span>
                    <button onClick={()=>{props.orderDecrement({...order})}}>-</button>
                    <span>{order.quantity}</span>
                    <button onClick={()=>{props.orderIncrement({...order})}}>+</button>
                    <span>{order.price}</span>
                    <span> </span>
                    <span>{order.price * order.quantity}</span>
                    <button onClick={()=>{props.deleteToBasket({...order})}}>Удалить</button>
            </div>
        })
    }


    return <div className='windowBasket'>
                <h3>Корзина</h3>
                <div id='formBasket'>
                    <PushOrder order={props.order}/>
                    <button className='closeBasket btncard btn waves-effect waves-light' onClick={props.showBasket}>Закрыть</button>
                </div>
            </div>


}

export {Basket};