import { useEffect, useState } from 'react';
import { getProducts } from '../utils/getProducts';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((productsFromPromise) => {
        setProducts(productsFromPromise);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  if (loading) return <span className="loader">Cargando...</span>;

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
