import { Link } from 'react-router-dom';
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import './index.css';

export const MainContent = () => {
  return (
    <section className="main-content">
      <div className="container">
        <div className="category-cards">
          <Link to="/men" className="product-item-men">
            <img src={men} alt="Men" />
            <h3>Men</h3>
          </Link>
          <Link to="/women" className="product-item-women">
            <img src={women} alt="Women" />
            <h3>Women</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};
