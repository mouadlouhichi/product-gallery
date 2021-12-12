import CartIcon from '../assets/icons/Cart';

const ProductCard = ({ item, handleAddToCart }) => (
  <li className='product-card'  draggable="true">
    <div
      className='product-cover'
      style={{
        backgroundImage: `url(${item.productImage})`,
      }}
    ></div>
    <div className='product-details'>
      <h3 className='product-price'>$ {item.productPrice}</h3>
      <h4 className='product-name'>{item.productName}</h4>
      <p className='product-description'>
        {item.description.length > 45
          ? `${item.description.slice(0, 45)}...`
          : item.description}
      </p>
    </div>
    <div className='product-footer'>
      <CartIcon />
      <button
        className='product-add-to-cart'
        onClick={() => handleAddToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  </li>
);

export default ProductCard;
