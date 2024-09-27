function Paginator  (props) {


    return <ul className="pagination">
        <li id = 'pagin' className="waves-effect"><a href="#!"><i className="material-icons" onClick={()=>{props.paginateDecrement(props.currentPage)}}>chevron_left</i></a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!" onClick={()=>{props.paginate(1)}}>1</a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!" onClick={()=>{props.paginate(2)}}>2</a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!" onClick={()=>{props.paginate(3)}}>3</a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!" onClick={()=>{props.paginate(4)}}>4</a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!" onClick={()=>{props.paginate(5)}}>5</a></li>
        <li id = 'pagin' className="waves-effect"><a href="#!"><i className="material-icons" onClick={()=>{props.paginateIncrement(props.currentPage)}}>chevron_right</i></a></li>
    </ul>

}

export {Paginator}