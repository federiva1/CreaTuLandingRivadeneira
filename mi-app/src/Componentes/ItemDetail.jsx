import './ItemDetail.css';

function ItemDetail({ product }) {
  return (
    <div className="item-detail-card">
      <h2>{product.title}</h2>
      <img src={product.pictureUrl} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
