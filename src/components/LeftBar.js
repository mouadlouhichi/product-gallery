

const Header = ({ categories,activeCategory,handleFilter }) => (
    <div className='left-bar'>
    <h1>Product Gallery</h1>
    <h2>By Mouad Louhichi</h2>
    <div className='categories'>
      <ul>
        {categories.map((category, idx) => (
          <li
            className={category === activeCategory ? 'active' : ''}
            key={idx}
            onClick={() => handleFilter(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Header;
