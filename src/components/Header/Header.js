import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = ({ totalQuantity }) => {
	const navigate = useNavigate();

	return (
		<nav className="navigation">
			<div className="logo">Logo</div>
			<ul className="menu-list">
				<li className="menu-list_item" onClick={() => navigate("/")}>
					<Link href="/">Home</Link>
				</li>
				<li className="menu-list_item" onClick={() => navigate("/cart")}>
					<Link href="/cart">
						<p>Cart ({totalQuantity || 0})</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
