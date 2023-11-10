
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				gap: "50px",
			}}>
			<Link to='/'>
				<div>Home</div>
			</Link>
			<Link to='/about'>
				<div>About</div>
			</Link>
			<Link to='/contact'>
				<div>Contact</div>
			</Link>
		</div>
	);
};

export default Header;
