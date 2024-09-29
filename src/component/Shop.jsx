import { API_URL, API_KEY } from './Config';
import { Items } from "./Items";
import { useState, useEffect } from "react";
import { Paginator } from "./Paginator";
import { Preloader } from "./Preloader";
import { Basket } from "./Basket";
import { Alert } from './Alert';

function Shop() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [displayBasket, setDisplayBasket] = useState(false);
    const [order, setOrder] = useState([]);
    const [alertName, setAlertName] = useState('');


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(res => res.json())
            .then(data => {
                setItems(data.shop);
            })
            .then(data => {
                setLoading(false)
            })
    }, []);


    const lastItemPage = currentPage * itemsPerPage;
    const firstItemPage = lastItemPage - itemsPerPage;
    const currentPageItems = items.slice(firstItemPage, lastItemPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const paginateIncrement = pageNumber => {
        if (pageNumber < 5) {
            setCurrentPage(pageNumber + 1);
        }
    };

    const paginateDecrement = pageNumber => {
        if (pageNumber > 1) {
            setCurrentPage(pageNumber - 1);
        }
    };

    const showBasket = () => {
        if (!displayBasket) {
            setDisplayBasket(true);
        }
        if (displayBasket) {
            setDisplayBasket(false);
        }
    }

    const addToBasket = (item) => {
        // console.log(order.find(item => item.id === item.id)
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (itemIndex !== -1) {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else { return orderItem; }
            })
            setOrder(newOrder);
        } else {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
        setAlertName(item.name)
    };

    const deleteToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        const deleteItem = order.splice(itemIndex, 1);
        const newOrder = order.filter(x => !deleteItem.includes(x));
        setOrder(newOrder);
    }

    const orderIncrement = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else { return orderItem; }
        })
        setOrder(newOrder);

    }

    const orderDecrement = (item) => {
        if (item.quantity > 1) {
            const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1
                    }
                } else { return orderItem; }
            })
            setOrder(newOrder);
        } else { deleteToBasket(item); }
    }

    const closeAlert=() => {
        setAlertName('')

    }


    return (
        <main className='container content'>
            
            {loading ?
                (<Preloader />) : <Items items={currentPageItems} addToBasket={addToBasket} />
            }
            {displayBasket ?
                (<Basket order={order}
                    orderIncrement={orderIncrement}
                    orderDecrement={orderDecrement}
                    deleteToBasket={deleteToBasket}
                    showBasket={showBasket} />) : null
            }
            {alertName && <Alert name = {alertName} closeAlert = {closeAlert}/>}
            {!loading ? <Paginator
                paginate={paginate}
                paginateIncrement={paginateIncrement}
                paginateDecrement={paginateDecrement}
                currentPage={currentPage}
            /> : null
            }
            <div className='basket-bottom' onClick={showBasket}>
                <i className="small material-icons">
                    <a className='basket-bottom' href="#!">shopping_cart</a>
                </i>
            </div>
            {order.length ?
                // <span className='orderValue'>{order.length}</span>
                <span className='orderValue'>{order.length}</span>
                : null
            }
        </main>
    )


}
export { Shop }
