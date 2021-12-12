import React, { useState, useEffect } from 'react';
import './App.css';
import DATA from './data/DUMMY.data';
import utils from './utils/utils';

import LeftBar from './components/LeftBar';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const HOME = utils.HOME;
  const categories = utils.getCategories(DATA);

  let firstActive =
    typeof window !== 'undefined'
      ? decodeURIComponent(window.location.hash).substr(1)
      : `${categories[0]}`;
  if (firstActive === '' || firstActive === '#') {
    firstActive = HOME;
  }

  const [activeCategory, setActiveCategory] = useState(firstActive);
  const [searchInput, setSearchInput] = useState('');
  const [availableProducts, setAvailableProducts] = useState(DATA);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleFilter = (category) => {
    setActiveCategory(category);
    window.location.hash = `#${encodeURIComponent(category)}`;
  };

  const handleAddToCart = (item) => {
    const idx = cart.findIndex((itm) => itm.productId === item.productId);
    const newCart = [...cart];
    if (idx !== -1) {
      newCart[idx].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const idx = cart.findIndex((itm) => itm.productId === item.productId);
    const newCart = [...cart];

    if (newCart[idx].quantity === 1) {
      /*       newCart.filter((it) => it.productId !== item.productId);
      console.log(newCart,cart,item); */
      setCart((prev) => prev.filter((it) => it.productId !== item.productId));
    } else {
      newCart[idx].quantity -= 1;
      setCart(newCart);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, curr) => {
      acc += parseFloat(curr.productPrice) * curr.quantity;
      return acc;
    }, 0).toFixed(2);
  };

  useEffect(() => {
    let searchedProducts = utils.getSearchedProducts(
      searchInput,
      availableProducts,
      DATA
    );
    setAvailableProducts(searchedProducts);

    if (activeCategory !== HOME) {
      let filteredProducts = DATA.filter((product) =>
        product.categories.includes(activeCategory.toLocaleLowerCase())
      );
      setAvailableProducts(filteredProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, activeCategory]);

  return (
    <div className='app'>
      <LeftBar {...{ categories, activeCategory, handleFilter }} />
      <Header {...{ searchInput, setSearchInput, cart, setShowCart }} />
      <div className='main'>
        <ul>
          {availableProducts.map((item) => (
            <ProductCard key={item.productId} {...{ item, handleAddToCart }} />
          ))}
        </ul>
      </div>
      <Cart
        {...{
          cart,
          showCart,
          handleAddToCart,
          handleRemoveItem,
          getTotalPrice,
          onClose: () => setShowCart(false),
        }}
      >
        <p>This is modal body</p>
      </Cart>{' '}
    </div>
  );
}

export default App;
