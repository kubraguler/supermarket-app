import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<nav className="navigation">
			<div className="logo">Logo</div>
			<ul className="menu-list">
				<li className="menu-list_item">
					<Link href="/">Home</Link>
				</li>
				<li className="menu-list_item">
					<Link href="/shop">Shop</Link>
				</li>
				<li className="menu-list_item">
					<Link href="/cart">Cart</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
