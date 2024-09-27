function Basket(props) {

    const totalPrice = props.order.reduce((sum,el)=>{
        return sum + el.price * el.quantity;
    },0)

    const PushOrder = order => {
        return order.order.map(order => {
            return <div className='order' id={order.id}>
                <span>{order.name} </span>
                <button className='btn btnControll waves-effect waves-light' onClick={()=>{props.orderDecrement({...order})}}>-</button>
                <span> {order.quantity} </span>
                <button className='btn btnControll waves-effect waves-light' onClick={()=>{props.orderIncrement({...order})}}>+</button>
                <span> x {order.price}</span>
                <span> </span>
                <span> = {order.price * order.quantity}</span>
                <button className='btn btnControll waves-effect waves-light right' onClick={()=>{props.deleteToBasket({...order})}}>X</button>
            </div>
        })
    }


    return <div className='windowBasket'>
        <h3>Корзина</h3>
        <button className='closeBasket btncard btn ' onClick={props.showBasket}>Закрыть</button>
        <div id='formBasket'>
            <PushOrder order={props.order}/>
            <p style={{color:"black"}}>Общая стоимость: {totalPrice}</p>
        </div>
    </div>


}

export {Basket};