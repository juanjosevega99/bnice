import './index.css';

const MenProducts = () => {
  // Replace with your actual product data
  const products = [
    // Product items for men
    {
      image: 'https://instagram.fptx1-1.fna.fbcdn.net/v/t51.2885-15/330787235_195885126385144_1846922371022966677_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fptx1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=gxcBJ3VVhL8AX_L1-vS&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1MDY0ODYzNTA1MDI2MTk2OQ%3D%3D.2-ccb7-5&oh=00_AfDfBrZHeHI6qQmxPCDo_iVaBtRbmUtQ7P7g7Ad_frdtWg&oe=6472CFFC&_nc_sid=640168',
      title: ''
    }
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img src={product.image} alt={product.title} />
          {/* <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button>Add to Cart</button> */}
        </div>
      ))}
    </div>
  );
};

export default MenProducts;
