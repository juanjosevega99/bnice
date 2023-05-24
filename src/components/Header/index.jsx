import logo from "../../assets/logo-b-nice.jpeg";
import './index.css';

export const Header = () => {
  return (
    <header>
      <div className="container">
        {/* <h1 className="logo">B-NICE</h1> */}
        <img src={logo} className="logo" alt="" />
        <nav>
          <ul className="menu">
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
