
function Header () {


    return (
        <nav className='teal darken-1'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo" >React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/*<li><a href="!#">Repo</a></li>*/}
                    <div className='basket-top'>
                        <i className="small material-icons"><a className='basket-top' href="#!">shopping_cart</a></i>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export {Header}