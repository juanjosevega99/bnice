import './index.css';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} T-Shirt Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};
