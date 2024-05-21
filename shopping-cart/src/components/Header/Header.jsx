import Cart from "../Cart/Cart";

function Header(props) {
    return (
        <header>
            <Cart amount={ props.amount } />
        </header>
    )
}

export default Header;