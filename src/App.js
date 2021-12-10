import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './assets/icons/search';
import CartIcon from './assets/icons/cart';
import ViewIcon from './assets/icons/view';
import DATA from './data/DUMMY.data';
import getCategories from './utils/categories';

function App() {
  const HOME = 'Home';

  const categories = getCategories(DATA);
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

  const handleFilter = (category) => {
    setActiveCategory(category);
    window.location.hash = `#${encodeURIComponent(category)}`;
  };

  useEffect(() => {
    let products =
      searchInput.length > 0
        ? availableProducts.filter((product) =>
            product.productName
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase())
          )
        : DATA;
    setAvailableProducts(products);
    console.log(searchInput);

    if (activeCategory !== HOME) {
      let filteredProducts = DATA.filter((product) =>
        product.categories.includes(activeCategory.toLocaleLowerCase())
      );
      setAvailableProducts(filteredProducts);
    }
  }, [searchInput, activeCategory]);

  return (
    <div className='App'>
      <div className='leftBar'>
        <h1>Simple Gallery</h1>
        <div className='categories'>
          <ul>
            {categories.map((category, idx) => (
              <li
                className={category === activeCategory && 'active'}
                key={idx}
                onClick={() => handleFilter(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='header'>
        <div className='searchInput'>
          <input
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder='Search'
          />

          <div className='searchIcon'>
            <SearchIcon />
          </div>
        </div>

        <div className='cart'>
          <CartIcon />
          <span>0</span>
        </div>
      </div>
      <div className='main'>
        {availableProducts.map((item) => (
          <div key={item.id} className='product-card'>
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
              <button className='product-add-to-cart'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
