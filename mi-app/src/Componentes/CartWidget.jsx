import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={24} color="white" />
      <span style={{
        position: 'absolute',
        top: -5,
        right: -10,
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
      }}>
        3
      </span>
    </div>
  );
}

export default CartWidget;
