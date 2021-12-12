import SearchIcon from '../assets/icons/Search';
import CancelIcon from '../assets/icons/Cancel';
import CartIcon from '../assets/icons/Cart';

const Header = ({ searchInput, setSearchInput, cart, setShowCart }) => (
  <div className='header'>
    <div className='search-input'>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Search'
      />

      <div className='search-icon'>
        {searchInput.length > 0 ? (
          <CancelIcon />
        ) : (
          <SearchIcon onClick={() => setSearchInput('')} />
        )}
      </div>
    </div>

    <div className='cart-icon' onClick={() => setShowCart(true)}>
      <CartIcon />
      <span>{cart.length}</span>
    </div>
  </div>
);
export default Header;
