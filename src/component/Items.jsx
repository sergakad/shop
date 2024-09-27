import {Item} from "./Item";
import {useRef} from "react";

function Items (props) {
    const inputRef = useRef();



    return <div className='items'>
        {props.items ? props.items.map(items => {
                return <Item
                    id={items.mainId}
                    name={items.displayName}
                    description={items.displayDescription}
                    price={items.price.finalPrice}
                    images={items.displayAssets[0].full_background}
                    addToBasket={props.addToBasket}
                />
            }
        ): <h4>Oops! Nothing here...</h4>}</div>









}

export {Items}