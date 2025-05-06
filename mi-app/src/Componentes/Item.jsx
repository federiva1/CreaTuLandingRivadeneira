import { Link } from 'react-router-dom';

function Item({ product }) {
    return (
      <div className="product-card">
        <h3>{product.title}</h3>
        <img src={product.pictureUrl} alt={product.title} width="100%" />
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <Link to={`/item/${product.id}`}>Ver más</Link>
      </div>
    );
  }
  

export default Item;

